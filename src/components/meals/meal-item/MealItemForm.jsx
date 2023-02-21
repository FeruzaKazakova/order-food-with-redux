import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {ReactComponent as PlusIcon} from '../../../assets/icons/plus-icon.svg'
import { addToBasket } from '../../../store/basket/basketSlice';
import Button from '../../UI/Button';

const MealItemForm = ({id, title, price}) => {
    const dispatch = useDispatch()

    const [amount, setAmount] = useState(1)

    const amountChangeHandler =(event) => {
        setAmount(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const basketItem = {
            id,
            price,
            title,
            amount
        }

        dispatch(addToBasket(basketItem))
    }

  return( 
  <StyledForm onSubmit={submitHandler}>
    <Container>
        <label htmlFor={id}>Amount</label>
        <input value={amount} 
        onChange={amountChangeHandler} 
        type="number" 
        id={id} 
        min={1} 
        max={5} 
        defaultValue={1}/>
    </Container>
        <Button>
            <StyledIcon/>Add
        </Button>
     </StyledForm>
    )
}

export default MealItemForm;

const StyledIcon = styled(PlusIcon)`
    margin-right: 10px;
`

const Container = styled.div`
    margin-bottom: 12px;
    label{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
    margin-right: 20px;
    }
    input{
        width: 60px;
        height: 32px;
        border-radius: 6px;
        border: 1px solid #d6d6d6;
        outline: none;
        padding: 4px 12px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
    }
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`