import { createReducer } from '@reduxjs/toolkit';
import { addToDo } from '../actions/addToDo.action';
import { removeToDo } from '../actions/removeToDo.action';
import { editToDo } from '../actions/editToDo.action';
import { ITask } from '../../types/Task.interface';

export const toDoListReducer = createReducer([] as ITask[], (builder) => {
  builder.addCase(addToDo, (state, action) => {
    state.push(action.payload.toDo);
  });

  builder.addCase(editToDo, (state, action) => state.map((toDo) => (
    toDo.id !== action.payload.toDo.id ? toDo : action.payload.toDo
  )));

  builder.addCase(removeToDo, (state, action) => state.filter(({ id }) => (
    id !== action.payload.idToDo
  )));
});
