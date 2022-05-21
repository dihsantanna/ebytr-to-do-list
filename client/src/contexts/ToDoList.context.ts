/* eslint-disable no-unused-vars */
import { createContext } from 'react';
import { ITask } from '../types/Task.interface';
import { IUser } from '../types/User.interface';

interface ToDoListContextProps {
  user: IUser;
  tasks: ITask[];
  orderedTasks: ITask[]
  addUser(newUser: IUser): void;
  addTask(task: ITask): void;
  editTask(taskId: string, editingTask: ITask): void;
  deleteTask(taskId: string): void;
  sortTasks(ordainedTasks: ITask[]): void;
}

export const INITIAL_STATE = {
  user: {
    _id: '',
    name: '',
  },
  tasks: [] as ITask[],
  orderedTasks: [] as ITask[],
} as ToDoListContextProps;

export const ToDoListContext = createContext<ToDoListContextProps>(INITIAL_STATE);
