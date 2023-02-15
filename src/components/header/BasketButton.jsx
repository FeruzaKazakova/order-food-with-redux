import styled from "styled-components"
import {ReactComponent as BasketIcon} from '../../assets/icons/basket-icon.svg'

const BasketButton = ({count, ...restProps}) => {
  return <StyledButton {...restProps}>
    <BasketIcon/>
        <StyledTitle>Your Cart </StyledTitle>
        <StyledCounter id="counter">{count || 0}</StyledCounter>
  </StyledButton>
}

export default BasketButton;

const StyledButton = styled.button`
    background-color: #5A1F08;
    border-radius: 30px;
    padding: 12px 32px;
    border: none;

    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center;

    &:hover{
        background-color: #2c0d00;
    }

    &:hover > #counter{
        background-color: #5e2913;
    }
    &.bump {
  animation: bump 300ms ease-out;
}

   @keyframes bump {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
`

const StyledTitle = styled.span`
    margin-left: 12px;
    margin-right: 24px;
    color: white;
`
const StyledCounter = styled.span`
    background: #8A2B06;
    border-radius: 30px;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    padding: 4px 20px;
`