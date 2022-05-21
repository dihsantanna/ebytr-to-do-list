/* eslint-disable no-unused-vars */
/* eslint-disable sonarjs/no-duplicate-string */
import moment from 'moment';
import { createContext } from 'react';
import uniqid from 'uniqid';
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
    name: 'Diogo Sant\'Anna',
  },
  tasks: [
    {
      id: uniqid(),
      task: 'beber',
      status: 'Em andamento',
      createdAt: moment('2022-05-19T14:40:59-03:00').utc().format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      id: uniqid(),
      task: 'comer',
      status: 'Pronto',
      createdAt: moment('2022-05-18T08:40:59-03:00').utc().format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      id: uniqid(),
      task: 'ler',
      status: 'Pendente',
      createdAt: moment('2022-05-20T19:30:59-03:00').utc().format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      id: uniqid(),
      task: 'falar',
      status: 'Pendente',
      createdAt: moment('2022-05-20T16:40:59-03:00').utc().format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      id: uniqid(),
      task: 'andar',
      status: 'Pendente',
      createdAt: moment('2022-05-20T17:40:59-03:00').utc().format('YYYY-MM-DD HH:mm:ss'),
    },
  ] as ITask[],
  orderedTasks: [] as ITask[],
} as ToDoListContextProps;

export const ToDoListContext = createContext<ToDoListContextProps>(INITIAL_STATE);
