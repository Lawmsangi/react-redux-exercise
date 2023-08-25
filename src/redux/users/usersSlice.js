import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: true,
  error: undefined
};

const url = 'https://randomuser.me/api/?results=5'

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async(_, thunkAPI) => {
    try {
      const request = await fetch(url)
      const response = await request.json()
      return response.results
    }
    catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong with your request');
    }
  }
)

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchUsers.fulfilled, (state,action) => {
        state.isLoading = false;
        state.users =action.payload
      })

      .addCase(fetchUsers.rejected, (state) => {
        state.isLoading = false;
      })
  }
});

export default usersSlice.reducer;