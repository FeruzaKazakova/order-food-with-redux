import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getBasket } from "../../store/basket/basketReducer";
import BasketButton from "./BasketButton";

const Header = ({onShowBasket}) => {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.basket.items)
    const [animationClass, setAnimationClass] = useState("")

    useEffect(()=>{
        dispatch(getBasket())
    },[dispatch])

    const calculateTotalAmount = () => {
        const sum = items.reduce((s, item) => {
            return s + item.amount
        }, 0)
        return sum
    }

    useEffect(() => {
    setAnimationClass('bump')

    const id = setTimeout(() => {
        setAnimationClass('')
    }, 300);

    return () => {
        clearTimeout(id)
    }
    }, [items])

    return <Container>
        <Logo>ReactMeals</Logo>
        <BasketButton className={animationClass} onClick={onShowBasket} count={calculateTotalAmount()}/>
    </Container>
}

export default Header;

const Container = styled.header`
    width: 100%;
    height: 101px;
    background-color: #8A2B06;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 120px;
    padding-right: 120px;
    position: fixed;
    z-index: 1;
    top: 0;
`

const Logo = styled.p`
    font-weight: 600;
    font-size: 38px;
    line-height: 57px;
    color: #FFFFFF;
    margin: 0;
`