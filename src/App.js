import { useState } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import Basket from './components/basket/Basket';
import Header from './components/header/Header';
import Meals from './components/meals/Meals';
import Summary from './components/summary/Summary';
import { store } from './store';
import { BasketProvider } from './store/BasketContext';

function App() {
  const [isBasketVisible, setBasketVisible] = useState(false)

  const showBasketHandler =() => {
    setBasketVisible((prevState) => !prevState)
  }

  return (
    <div>
      <Provider store={store}>
      <Header onShowBasket = {showBasketHandler}/> 
      <Content>
      <Summary />
      <Meals />
      {isBasketVisible && <Basket onClose={showBasketHandler}/>}
      </Content>
      </Provider>
    </div>
  );
}

export default App;

const Content = styled.div`
margin-top:101px
`