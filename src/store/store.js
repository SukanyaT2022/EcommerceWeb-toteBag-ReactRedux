import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/productSlice'
import cartReducer from '../store/cartSlice'

export const store = configureStore({
  reducer: {
    products: counterReducer,
    cart:cartReducer,
  },
})