import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { list } from '../api/api-products'

const initialState = {
  products: [],
  status: 'idle',
  error: null
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await list()
    return response.data
  }
)

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts (state, action) {
      state = {
        ...state,
        products: [...action.payload]
      }
      return state
    }
  },
  extraReducers (builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.products = [...action.payload]
        return state
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failure'
        state.error = action.error.message
      })
  }
})

export const { addProducts } = productSlice.actions

export default productSlice.reducer

export const selectAllProducts = (state) => state.products.products
