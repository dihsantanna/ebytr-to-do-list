import moment from 'moment';
import uniqid from 'uniqid';
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ToDoListContext } from '../contexts/ToDoList.context';
import { statusTask } from '../utils/statusTask';

export function CreateTask() {
  const [task, setTask] = useState('');
  const { setUserTasks } = useContext(ToDoListContext);
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setTask(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUserTasks((prevState) => ({
      ...prevState,
      tasks: [...prevState.tasks, {
        id: uniqid(),
        task,
        status: statusTask[0],
        createdAt: moment().utc().format('DD/MM/YYYY HH:mm:ss'),
      }],
    }));
    setTask('');
  };

  return (
    <Form
      className={ `align-self-start d-flex justify-content-center align-items-center
      w-50 mt-3` }
      onSubmit={ handleSubmit }
    >
      <Form.Group className="w-50">
        <Form.Label className="my-0 w-100" htmlFor="title-task">
          <Form.Control
            className="py-2"
            id="title-task"
            type="text"
            placeholder="Qual a sua Tarefa?"
            onChange={ handleChange }
            value={ task }
            autoFocus
          />
        </Form.Label>
      </Form.Group>
      <Button
        className="ms-3"
        variant="outline-success"
        type="submit"
      >
        Criar Tarefa
      </Button>
    </Form>
  );
}
