/* eslint-disable no-underscore-dangle */
import { createReducer } from '@reduxjs/toolkit';
import { login } from '../actions/login.action';

const INITIAL_STATE = {
  _id: '',
  name: 'Diogo Sant\'Anna',
};

export const userReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(login, (state, action) => {
    state._id = action.payload.user._id;
    state.name = action.payload.user.name;
  });
});
