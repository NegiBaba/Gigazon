import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { filter, list, search } from '../api/api-products'

const initialState = {
  products: [],
  searchString: '',
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

export const filterProducts = createAsyncThunk(
  'products/filterProducts',
  async (query) => {
    const response = await filter(query)
    return response.data
  }
)

export const searchProducts = createAsyncThunk(
  'products/searchProducts',
  async (query) => {
    const response = await search(query)
    return response.data.products
  }
)

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts(state, action) {
      state = {
        ...state,
        products: [...action.payload]
      }
      return state
    },
    setSearchString(state, action) {
      state.searchString = action.payload
    }
  },
  extraReducers(builder) {
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
      .addCase(filterProducts.fulfilled, (state, action) => {
        state.products = action.payload
      })
      .addCase(searchProducts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.products = action.payload
      })
  }
})

export const { addProducts, setSearchString } = productSlice.actions

export default productSlice.reducer

export const selectAllProducts = (state) => state.products.products
