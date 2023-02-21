import { Snackbar } from "./components/UI/Snackbar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import Summary from "./components/summary/Summary";
import { uiActions } from "./store/ui/uiSlice";

function App() {
  const snackbar = useSelector((state) => state.ui.snackbar);
  const dispatch = useDispatch();
  const [isBasketVisible, setBasketVisible] = useState(false);

  const showBasketHandler = () => {
    setBasketVisible((prevState) => !prevState);
  };

  return (
    <div>
        <Header onShowBasket={showBasketHandler} />
        <Content>
          <Summary />
          <Meals />
          {isBasketVisible && <Basket onClose={showBasketHandler} />}
          <Snackbar
            isOpen={snackbar.isOpen}
            severity={snackbar.severity}
            message={snackbar.message}
            onClose={() => dispatch(uiActions.closeSnackbar())}
          />
        </Content>
    </div>
  );
}

export default App;

const Content = styled.div`
  margin-top: 101px;
`;
