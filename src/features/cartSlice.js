import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
  products: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state, action) {
      state.products.push(action.payload)
    }
  }
})

export const { addProductToCart } = cartSlice.actions

export default cartSlice.reducer
