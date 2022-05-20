import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo_ebytr.svg';
import { ToDoListContext } from '../contexts/ToDoList.context';
import { CreateTask } from './CreateTask';

export function Header() {
  const { name } = useContext(ToDoListContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };
  return (
    <header
      className={ `p-0 m-0 ps-4 border-bottom rounded-2 d-flex 
      justify-content-between position-relative` }
      style={ { height: '9rem', backgroundColor: '#FFFFFF' } }
    >
      <img
        className="align-self-baseline"
        style={ { width: '4.8rem' } }
        src={ logo }
        alt="logo Ebytr to do list"
      />
      <CreateTask />
      <Button
        className="rounded-2 align-self-end mb-3 me-2"
        style={ { width: '4.8rem', height: '2.8rem' } }
        variant="outline-success"
        type="button"
        onClick={ handleLogout }
      >
        Sair

      </Button>
      <div
        className={ `w-25 mt-3 me-2 position-absolute top-0 end-0 fs-5
          fst-italic text-end` }
        style={ { maxWidth: '17rem' } }
      >
        Olá,
        {' '}
        <span
          className="text-decoration-underline fw-bolder text-success text-opacity-75"
        >
          {`${name}`}
        </span>
        {' '}
        !
      </div>
    </header>
  );
}
