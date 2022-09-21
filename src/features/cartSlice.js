import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { list } from '../api/api-cart'

const initialState = {
  count: 0,
  products: [],
  status: 'idle'
}

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async () => {
    const response = await list();
    return response.data;
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart (state, action) {
      state.products.push(action.payload)
      state.count++;
    }
  },
  extraReducers (builder) {
    builder
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.count = action.payload.length
        state.products = action.payload
        state.status = 'succeeded'
        return state
      })
  }
})

export const { addProductToCart } = cartSlice.actions

export default cartSlice.reducer
