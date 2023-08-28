import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder } from './orderAPI'; 

const initialState = {
  orders: [],
  status: 'idle',
};

export const createOrderAsync = createAsyncThunk(
  'counter/createOrder',
  async (order) => {
    const response = await createOrder(order);
    return response.data;
  }
);

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
    
  },  

  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders.push(action.payload);
      });
  },
});

//export const { increment} = orderSlice.actions;

//e xport const selectOrders = (state) => state.counter.orders;

export default orderSlice.reducer;
