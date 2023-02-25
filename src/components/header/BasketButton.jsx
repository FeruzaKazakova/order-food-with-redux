import styledComponents from 'styled-components';
import {styled} from '@mui/system';
import { Button as MuiButton } from '@mui/material'
import { ReactComponent as BasketIcon } from '../../assets/icons/basket-icon.svg'

const BasketButton = ({count, ...restProps}) => {
  return <StyledButton {...restProps}>
    <BasketIcon/>
        <StyledTitle>Your Cart </StyledTitle>
        <StyledCounter id="counter">{count || 0}</StyledCounter>
  </StyledButton>
}

export default BasketButton;

const StyledButton = styled(MuiButton)(() => ({
    backgroundColor: '#5A1F08',
    borderRadius: '30px',
    padding: '12px 32px',
    border: 'none',

    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#FFFFFF',
    cursor: 'pointer',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',

    '&:hover':{
        backgroundColor: '#2c0d00'
    },
    '&:hover > #counter':{
      backgroundColor: '#5e2913'
  },
    '&.bump': {
    animation: 'bump 300ms ease-out'
  },
     '@keyframes bump':{
    '0%':{
      transform: 'scale(1)'
    },
    "10%" :{
      transform: 'scale(0.9)'
    },
    '30% ':{
      transform: 'scale(1.1)'
    },
    '50%' :{
      transform: 'scale(1.15)'
    },
   '100%':{
      transform: 'scale(1)'
    }
  }

}))

const StyledTitle = styledComponents.span`
    margin-left: 12px;
    margin-right: 24px;
    color: white;
`
const StyledCounter = styledComponents.span`
    background: #8A2B06;
    border-radius: 30px;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    padding: 4px 20px;
`