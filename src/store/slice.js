import { createSlice } from "@reduxjs/toolkit";

export const counterSLice = createSlice({
      initialState:0,
      name:'counter',
      reducers:{
           increment:(state)=>state+1,
           decrement:(state)=>state-1

      }
})


export const {increment,decrement} = counterSLice.actions 

export default counterSLice.reducer
