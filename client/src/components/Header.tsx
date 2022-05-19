import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo_ebytr.svg';
import { ITask } from '../types/Task.interface';
import { CreateTask } from './CreateTask';

export function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };
  return (
    <header
      className={ `p-0 m-0 ps-4 border-bottom rounded-2 d-flex align-items-center
      justify-content-between` }
      style={ { height: '4rem' } }
    >
      <img
        style={ { width: '4rem' } }
        src={ logo }
        alt="logo Ebytr to do list"
      />
      <CreateTask onCreateTask={ (task: ITask) => { console.log(task); } } />
      <Button
        className="h-100 rounded-0"
        style={ { width: '5rem' } }
        variant="primary"
        type="button"
        onClick={ handleLogout }
      >
        Sair

      </Button>
    </header>
  );
}
