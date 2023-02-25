import { Snackbar } from "./components/UI/Snackbar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import Summary from "./components/summary/Summary";
import { uiActions } from "./store/ui/uiSlice";

import {Box} from '@mui/material';
import {Button} from '@mui/material';
import {Typography} from '@mui/material';
import {Modal} from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
        {isBasketVisible && <Basket open={isBasketVisible} onClose={showBasketHandler} />}
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
