import React, { useMemo, useState } from 'react';
import { IUserTasks } from '../types/UserTasks.interface';
import { INITIAL_STATE, ToDoListContext } from './ToDoList.context';

interface ToDoListProviderProps {
  children: JSX.Element;
}

export function ToDoListProvider({ children }: ToDoListProviderProps) {
  const [userTasks, setUserTasks] = useState<IUserTasks>(INITIAL_STATE);

  const contextValue = useMemo(() => ({ ...userTasks, setUserTasks }), [userTasks]);

  return (
    <ToDoListContext.Provider value={ contextValue }>
      {children}
    </ToDoListContext.Provider>
  );
}
