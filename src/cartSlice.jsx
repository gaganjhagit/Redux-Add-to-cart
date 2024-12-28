import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"flipcart",
    initialState:[],
    reducers:{
        addtocart:(initialState,actions)=>{
            initialState.push(actions.payload)
        }
    }
})

export const {addtocart} = cartSlice.actions
export default cartSlice.reducer
