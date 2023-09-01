import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLoggedInUserOrders, updateUser, fetchLoggedInUser } from "./userAPI";

const initialState = {
    userOrders: [],
    status: 'idle',
    userInfo: null,
}

export const fetchLoggedInUserOrderAsync = createAsyncThunk(
    'user/fetchLoggedInUserOrders',
    async (id) => {
        const response = await fetchLoggedInUserOrders(id);
        return response.data;
    }
);

export const fetchLoggedInUserAsync = createAsyncThunk(
    'user/fetchLoggedInUser',
    async (id) => {
      const response = await fetchLoggedInUser(id);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );

export const updateUserAsync = createAsyncThunk(
    'user/updateUser',
    async (update) => {
        const response = await updateUser(update);
        return response.data;
    }
)


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchLoggedInUserOrderAsync.pending, (state) => {
            state.status = 'pending';
        })
        .addCase(fetchLoggedInUserOrderAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.userOrders = action.payload;
        })
        .addCase(updateUserAsync.pending, (state) => {
            state.status = 'pending';
        })
        .addCase(updateUserAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.userOrders = action.payload;
        })
        .addCase(fetchLoggedInUserAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.userInfo = action.payload;
        });
    }
})

export const selectUserOrders = (state) => state.user.userOrders;
export const selectUserInfo = (state) => state.user.userInfo;
export const { increment } = userSlice.actions;

export default userSlice.reducer; // Default export