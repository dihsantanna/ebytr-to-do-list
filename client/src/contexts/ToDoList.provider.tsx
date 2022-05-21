import React, { useCallback, useMemo, useState } from 'react';
import { ITask } from '../types/Task.interface';
import { IUser } from '../types/User.interface';
import { INITIAL_STATE, ToDoListContext } from './ToDoList.context';

interface ToDoListProviderProps {
  children: JSX.Element;
}

export function ToDoListProvider({ children }: ToDoListProviderProps) {
  const [user, setUser] = useState<IUser>(INITIAL_STATE.user);
  const [tasks, setTasks] = useState<ITask[]>(INITIAL_STATE.tasks);
  const [orderedTasks, setOrderedTasks] = useState<ITask[]>([]);

  const addUser = (newUser: IUser) => {
    setUser(newUser);
  };

  const addTask = (task: ITask) => {
    setTasks((prevState) => ([
      ...prevState,
      task,
    ]));
  };

  const editTask = (taskId: string, editingTask: ITask) => {
    setTasks((prevState) => {
      const replaceTask = prevState
        .map((task) => (task.id === taskId ? editingTask : task));
      return replaceTask;
    });
  };

  const deleteTask = useCallback((taskId: string) => {
    const deleted = tasks.filter((task) => (task.id !== taskId));
    setTasks([...deleted]);
  }, [tasks]);

  const sortTasks = (ordainedTasks: ITask[]) => {
    setOrderedTasks(ordainedTasks);
  };

  const contextValue = useMemo(() => ({
    user,
    tasks,
    orderedTasks,
    addUser,
    addTask,
    editTask,
    deleteTask,
    sortTasks,
  }), [deleteTask, orderedTasks, tasks, user]);

  return (
    <ToDoListContext.Provider value={ contextValue }>
      {children}
    </ToDoListContext.Provider>
  );
}
