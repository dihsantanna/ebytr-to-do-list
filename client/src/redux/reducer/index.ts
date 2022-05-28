import { combineReducers } from '@reduxjs/toolkit';
import { toDoListReducer } from './toDoList.reducer';
import { userReducer } from './user.reducer';

export const rootReducer = combineReducers({
  users: userReducer,
  toDoList: toDoListReducer,
});
