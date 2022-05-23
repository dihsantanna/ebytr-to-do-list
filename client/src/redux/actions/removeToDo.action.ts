import { createAction } from '@reduxjs/toolkit';

export const removeToDo = createAction('REMOVE_TO_DO', (idToDo: string) => ({
  payload: { idToDo },
}));
