import moment from 'moment';
import { NotePencil, X } from 'phosphor-react';
import React, { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { ToDoListContext } from '../contexts/ToDoList.context';
import { statusTask } from '../utils/statusTask';

export function ToDoList() {
  const { tasks } = useContext(ToDoListContext);

  const markColorStatus = (status: string) => {
    if (status === statusTask[0]) return 'text-danger border border-danger';
    if (status === statusTask[1]) return 'text-primary border border-primary';
    return 'text-success border border-success';
  };
  return (

    <ListGroup
      style={ { width: '90vw', maxWidth: '76.8rem', maxHeight: 'calc(100vh - 9rem)' } }
      className="mx-auto overflow-auto square scrollbar-dusty-grass square thin"
      as="ol"
      numbered
    >
      { tasks.map(({ id, task, status, createdAt }) => (
        <ListGroup.Item
          key={ id }
          as="li"
          className="d-flex justify-content-between align-items-start"
          style={ { height: '5rem' } }
        >
          <div className="ms-2 me-auto w-50">
            <div className="fw-bold">{ task }</div>
            <div
              className="d-flex justify-content-between my-2"
            >
              <span
                className={ `p-1 rounded-2 text-center ${markColorStatus(status)}` }
                style={ { width: '8rem' } }
              >
                {status}
              </span>
              <span>
                <span className="fw-bold">criada em:</span>
                {' '}
                {
                  moment(createdAt).locale('pt-br').format('DD/MM/YYYY  HH:mm:ss')
                }
              </span>
            </div>
          </div>
          <div
            className="w-50 h-100 d-flex align-items-center"
          >
            <Button
              className={ `d-flex justify-content-center align-items-center
              mx-auto w-25 mh-100` }
              variant="warning"
              type="button"
              data-toggle="tooltip"
              title="Editar tarefa"
            >
              <NotePencil weight="bold" style={ { minWidth: 'max-content' } } />
            </Button>

            <Button
              className={ `d-flex justify-content-center align-items-center
                mx-auto w-25 mh-100` }
              variant="danger"
              type="button"
              data-toggle="tooltip"
              title="Excluir tarefa"
            >
              <X weight="bold" style={ { minWidth: 'max-content' } } />
            </Button>

          </div>
        </ListGroup.Item>
      )) }

    </ListGroup>

  );
}
