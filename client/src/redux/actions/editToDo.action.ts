import { createAction } from '@reduxjs/toolkit';
import { ITask } from '../../types/Task.interface';

export const editToDo = createAction('EDIT_TODO', (toDo: ITask) => ({
  payload: {
    toDo,
  },
}));
