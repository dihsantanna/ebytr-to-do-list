import { NotePencil } from 'phosphor-react';
import React, { useContext, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { ToDoListContext } from '../contexts/ToDoList.context';
import { ITask } from '../types/Task.interface';
import { statusTask } from '../utils/statusTask';

interface EditTaskProps {
  taskId: string;
}

type TaskKey = keyof ITask;

export function EditTask({ taskId }: EditTaskProps) {
  const [show, setShow] = useState(false);
  const [editingTask, setEditingTask] = useState<ITask>({} as ITask);
  const { tasks, setUserTasks } = useContext(ToDoListContext);

  const handleClose = () => {
    setEditingTask({} as ITask);
    setShow(false);
  };

  const searchTask = () => {
    const search = tasks.find((task) => (task.id === taskId)) as ITask;
    setEditingTask(search);
  };

  const handleShow = () => {
    searchTask();
    setShow(true);
  };

  const handleChange = (
    { currentTarget }: React.BaseSyntheticEvent,
  ) => {
    const { id, value } = currentTarget;
    setEditingTask((prevState) => ({
      ...prevState,
      [id as TaskKey]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserTasks((prevState) => {
      const replaceTask = prevState.tasks
        .map((task) => (task.id === taskId ? editingTask : task));
      return {
        ...prevState,
        tasks: replaceTask,
      };
    });
    handleClose();
  };

  return (
    <>
      <Button
        className={ `d-flex justify-content-center align-items-center
          mx-auto w-25 mh-100` }
        variant="warning"
        type="button"
        data-toggle="tooltip"
        title="Editar tarefa"
        onClick={ handleShow }
      >
        <NotePencil weight="bold" style={ { minWidth: 'max-content' } } />
      </Button>
      <Modal show={ show } onHide={ handleClose }>
        <Modal.Header closeButton>
          <Modal.Title>Edite a Tarefa</Modal.Title>
        </Modal.Header>
        <Form onSubmit={ handleSubmit }>
          <Modal.Body>
            <Form.Group>
              <Form.Label htmlFor="task">Edite o título</Form.Label>
              <Form.Control
                id="task"
                type="text"
                value={ editingTask.task }
                onChange={ handleChange }
              />
              <Form.Label htmlFor="status">Edite o status</Form.Label>
              <Form.Select
                id="status"
                onChange={ handleChange }
                value={ editingTask.status }
              >
                {statusTask.map((status) => (
                  <option key={ status } value={ status }>{status}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={ handleClose }>
              Fechar
            </Button>
            <Button type="submit" variant="primary">
              Salvar Mudanças
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
