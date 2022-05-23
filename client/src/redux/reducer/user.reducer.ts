/* eslint-disable no-underscore-dangle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/User.interface';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    _id: '',
    name: 'Diogo Sant\'Anna',
  } as IUser,
  reducers: {
    loginUser(state: IUser, action: PayloadAction<IUser>) {
      state._id = action.payload._id;
      state.name = action.payload.name;
    },
  },
});

export const { reducer: userReducer, actions: { loginUser } } = userSlice;
