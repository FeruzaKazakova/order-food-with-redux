import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchApi } from "../../lib/fetchApi";
import { mealsActionTypes } from "../../store/meals/mealsReducer";
import MealItem from "./meal-item/MealItem";

const Meals = () => {
    const dispatch = useDispatch()
    const [error, setError] = useState('')
    const { meals } = useSelector((state) => state.meals)

    const getMeals = async () => {
    try{
        const response = await fetchApi('foods')
        dispatch({type: mealsActionTypes.GET_MEALS, payload: response.data})
    } catch (error){
        setError('Failed to load meals')
    }
    }

    useEffect(() => {
        getMeals()
    }, [])

    return (
        <Card>
        {meals.map((meal) => {
            return <MealItem meal={meal} key={meal._id}/>
        })}
        </Card>
    )
}

export default Meals;

const Card = styled.div`
    background: #FFFFFF;
    border-radius: 16px;
    width: 75%;
    margin: 60px auto;
    padding: 40px;
`