import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
    //name: cart is stat or variable name
  name: 'cart',
  initialState,
  //reducer is object
  reducers: {
    //setData is function--action data that we pass
    updateCart: (state,action) => {
      // ...state.value will copy all values 
      // action.payload will add new value  
      state.value = [...state.value, action.payload];
    },
    //step 1 to remove out of the cart--create remove function--step go cart.jx in page folder
    removeItem: (state,action)=>{
        const filter  = state.value.filter(item => item.id != action.payload)
        state.value = filter;
    },
    // favouriteHandler: (state,action)=>{
    //   const filter  = state.value.filter(item => item.id != action.payload)
    //   state.value = filter;
    // },
    increment: (state,action)=>{
      const filter  = state.value.map((item)=>{
        if(item.id ==action.payload){
          console.log("match found")
        }
  })
    },
    decrement:(state,action)=>{
     
    }
  },
})

export const { updateCart,removeItem,increment } = cartSlice.actions

export default cartSlice.reducer