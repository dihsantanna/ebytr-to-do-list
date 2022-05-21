import { X } from 'phosphor-react';
import React, { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ToDoListContext } from '../contexts/ToDoList.context';

interface DeleteTaskProps {
  taskId: string;
}

export function DeleteTask({ taskId }: DeleteTaskProps) {
  const { deleteTask } = useContext(ToDoListContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteTask = () => {
    deleteTask(taskId);
    handleShow();
  };

  return (
    <>
      <Button
        className={ `d-flex justify-content-center align-items-center
          mx-auto w-25 mh-100` }
        variant="danger"
        type="button"
        data-toggle="tooltip"
        title="Excluir tarefa"
        onClick={ handleShow }
      >
        <X weight="bold" style={ { minWidth: 'max-content' } } />
      </Button>
      <Modal show={ show } onHide={ handleClose }>
        <Modal.Header closeButton>
          <Modal.Title>Atenção!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Para prosseguir clique em confirmar</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ handleClose }>
            Fechar
          </Button>
          <Button variant="primary" onClick={ handleDeleteTask }>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
