import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { ToDoListProvider } from './contexts/ToDoList.provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToDoListProvider>
        <App />
      </ToDoListProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
