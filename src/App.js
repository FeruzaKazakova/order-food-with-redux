import { Snackbar } from "./components/UI/Snackbar";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider } from '@mui/material';
import styled from "styled-components";
import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import Summary from "./components/summary/Summary";
import { uiActions } from "./store/ui/uiSlice";
import { darkTheme, lightTheme } from "./lib/theme";

function App() {
  const snackbar = useSelector((state) => state.ui.snackbar);
  const dispatch = useDispatch();
  const [isBasketVisible, setBasketVisible] = useState(false);
  const themeMode = useSelector((state) => state.ui.themeMode)

  const showBasketHandler = () => {
    setBasketVisible((prevState) => !prevState);
  };

  const theme = useMemo(() => {
    const currentTheme = 
    themeMode === 'light'
    ? {
      ...lightTheme
      }
    : {
      ...darkTheme
    }

    return createTheme(currentTheme)
  }, [themeMode])

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Header onShowBasket={showBasketHandler} />
      <Content>
        <Summary />
        <Meals />
        {isBasketVisible && <Basket open={isBasketVisible} onClose={showBasketHandler} />}
        <Snackbar
          isOpen={snackbar.isOpen}
          severity={snackbar.severity}
          message={snackbar.message}
          onClose={() => dispatch(uiActions.closeSnackbar())}
        />
      </Content>
      </ThemeProvider>
    </div>
  );
}

export default App;

const Content = styled.div`
  margin-top: 101px;
`;
