import React from 'react';
import { ToDoListProvider } from './contexts/ToDoList.provider';
import { Routes } from './Routes';

function App() {
  return (
    <ToDoListProvider>
      <Routes />
    </ToDoListProvider>
  );
}

export default App;
