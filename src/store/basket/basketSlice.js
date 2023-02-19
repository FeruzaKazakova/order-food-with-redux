import { createSlice } from "@reduxjs/toolkit"
import { fetchApi } from "../../lib/fetchApi"

const initialState = {
    items: []
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        getBasketSuccess(state, action){
            state.items = action.payload
        }
    }
})

export const basketActions = basketSlice.actions

export const getBasket = () => async (dispatch) => {
    try{
        const { data } = await fetchApi('basket')

        dispatch(basketActions.getBasketSuccess(data.items))

    } catch (error){
        console.log(error);
    }
} 

export const addToBasket = (newItem) => async (dispatch) => {
    try{
        await fetchApi(`foods/${newItem.id}/addToBasket`, {method: "POST", body: {amount: newItem.amount}})

        dispatch(getBasket())

    } catch (error){
        console.log(error);
    }
} 

export const updateBasketItem = ({id, amount}) => async (dispatch) => {
    try{
        await fetchApi(`basketItem/${id}/update`, {method:"PUT", body: {amount}})
        dispatch(getBasket())
    } catch (error){
        console.log(error);
    }
}

export const deleteBasketItem = (id) => async (dispatch) => {
    try{
        await fetchApi(`basketItem/${id}/delete`, {method:"DELETE"})
        dispatch(getBasket())
    } catch (error){
        console.log(error);
    }
}
