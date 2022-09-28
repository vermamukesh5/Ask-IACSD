import { createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
      user: null,
  },
  
   reducers:{
    login: (state,action) => {
      state.user = action.payload; 
      
    },
    logout: (state) => {
      state.value = null;
    },
  },
});
 

export const { logout , login } = userSlice.actions;


export const selectUser = (state) => state.user.user;


export default userSlice.reducer;
