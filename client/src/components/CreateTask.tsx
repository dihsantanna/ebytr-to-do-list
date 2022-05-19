import moment from 'moment';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ITask } from '../types/Task.interface';
import { statusTask } from '../utils/statusTask';

interface CreateTaskProps {
  onCreateTask(task: ITask): void;
}

export function CreateTask({ onCreateTask }: CreateTaskProps) {
  const [task, setTask] = useState('');
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setTask(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onCreateTask({
      task,
      status: statusTask[0],
      createdAt: moment().utc().format('DD/MM/YYYY HH:mm:ss'),
    });
    setTask('');
  };

  return (
    <Form
      className="d-flex justify-content-center align-items-center w-50"
      onSubmit={ handleSubmit }
    >
      <Form.Group>
        <Form.Label className="mb-0 me-2" htmlFor="title-task">
          <Form.Control
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
        variant="outline-success"
        type="submit"
      >
        Criar Tarefa
      </Button>
    </Form>
  );
}
