import { createAction } from '@reduxjs/toolkit';
import { ITask } from '../../types/Task.interface';

export const addToDo = createAction('ADD_TODO', (toDo: ITask) => ({
  payload: {
    toDo,
  },
}));
