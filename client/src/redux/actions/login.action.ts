import { createAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/User.interface';

export const login = createAction('LOGIN', (user: IUser) => ({
  payload: {
    user,
  },
}));
