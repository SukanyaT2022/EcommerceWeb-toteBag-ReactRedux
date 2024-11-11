import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const counterSlice = createSlice({
    //name: data is statename
  name: 'data',
  initialState,
  //reducer is object
  reducers: {
    //setData is function--action data that we pass
    setData: (state,action) => {
      state.value = action.payload;
    }
  },
})

export const { setData } = counterSlice.actions

export default counterSlice.reducer