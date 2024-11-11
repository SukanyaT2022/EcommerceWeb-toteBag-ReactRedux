import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/productSlice'
import cartReducer from '../store/cartSlice'
import favouriteReducer from '../store/favoruiteSlice.js'

export const store = configureStore({
  reducer: {
    products: counterReducer,
    cart:cartReducer,
    favourite: favouriteReducer
  },
})