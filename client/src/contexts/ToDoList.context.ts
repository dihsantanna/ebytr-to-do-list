import { createContext, Dispatch, SetStateAction } from 'react';
import { ITask } from '../types/Task.interface';
import { IUserTasks } from '../types/UserTasks.interface';

interface ToDoListContextProps extends IUserTasks {
  setUserTasks: Dispatch<SetStateAction<IUserTasks>>;
}

export const INITIAL_STATE = {
  _id: '',
  name: '',
  tasks: [] as ITask[],
} as ToDoListContextProps;

export const ToDoListContext = createContext<ToDoListContextProps>(INITIAL_STATE);
