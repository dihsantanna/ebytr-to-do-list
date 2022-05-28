import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import uniqid from 'uniqid';
import moment from 'moment';
import { ITask } from '../../types/Task.interface';

const format = 'YYYY-MM-DD HH:mm:ss';

interface StateSlice {
  tasks: ITask[];
  orderedTasks: ITask[];
}

const initialState: StateSlice = {
  tasks: [
    {
      id: uniqid(),
      task: 'beber',
      status: 'Em andamento',
      createdAt: moment('2022-05-19T14:40:59-03:00').utc().format(format),
    },
    {
      id: uniqid(),
      task: 'comer',
      status: 'Pronto',
      createdAt: moment('2022-05-18T08:40:59-03:00').utc().format(format),
    },
    {
      id: uniqid(),
      task: 'ler',
      status: 'Pendente',
      createdAt: moment('2022-05-20T19:30:59-03:00').utc().format(format),
    },
    {
      id: uniqid(),
      task: 'falar',
      status: 'Pendente',
      createdAt: moment('2022-05-20T16:40:59-03:00').utc().format(format),
    },
    {
      id: uniqid(),
      task: 'andar',
      status: 'Pendente',
      createdAt: moment('2022-05-20T17:40:59-03:00').utc().format(format),
    },
  ] as ITask[],
  orderedTasks: [] as ITask[],
};

const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    addToDo(state: StateSlice, action: PayloadAction<ITask>) {
      state.tasks = [...state.tasks, action.payload];
    },
    editToDo(state: StateSlice, action: PayloadAction<ITask>) {
      state.tasks = state.tasks.map((toDo) => (
        toDo.id !== action.payload.id ? toDo : action.payload
      ));
    },
    removeToDo(state: StateSlice, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter(({ id }) => (
        id !== action.payload
      ));
    },
    addOrdered(state: StateSlice, action: PayloadAction<ITask[]>) {
      state.orderedTasks = action.payload;
    },
  },
});

export const { reducer: toDoListReducer, actions: {
  addToDo,
  editToDo,
  removeToDo,
  addOrdered,
} } = toDoListSlice;
