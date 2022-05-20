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
      className={ `p-0 m-0 ps-4 border-bottom rounded-2 d-flex 
      justify-content-between` }
      style={ { height: '9rem', backgroundColor: '#FFFFFF' } }
    >
      <img
        className="align-self-baseline"
        style={ { width: '4.8rem' } }
        src={ logo }
        alt="logo Ebytr to do list"
      />
      <CreateTask onCreateTask={ (task: ITask) => { console.log(task); } } />
      <Button
        className="rounded-2 mt-2 me-2"
        style={ { width: '4.8rem', height: '2.8rem' } }
        variant="outline-success"
        type="button"
        onClick={ handleLogout }
      >
        Sair

      </Button>
    </header>
  );
}
