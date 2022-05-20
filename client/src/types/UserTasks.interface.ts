import { ITask } from './Task.interface';

export interface IUserTasks {
  _id: string;
  name: string;
  tasks: ITask[];
}
