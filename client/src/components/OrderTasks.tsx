import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { ToDoListContext } from '../contexts/ToDoList.context';
import { ITask } from '../types/Task.interface';
import { statusTask } from '../utils/statusTask';

export default function OrderTasks() {
  const [byTask, setByTask] = useState(false);
  const [byDate, setByDate] = useState(true);
  const [byStatus, setByStatus] = useState<string>('');
  const { tasks, sortTasks } = useContext(ToDoListContext);

  const orderByName = (list: ITask[]) => {
    const compareTask = (a: ITask, b: ITask) => {
      const tA = a.task.toLocaleLowerCase();
      const tB = b.task.toLocaleLowerCase();

      const neg = -1;
      const pos = 1;
      const zero = 0;

      if (tA < tB) return neg;
      if (tA > tB) return pos;
      return zero;
    };

    return list.sort(compareTask);
  };

  const orderByDate = (list: ITask[]) => {
    const compareDate = (a: ITask, b: ITask) => {
      const tA = moment(a.createdAt).valueOf();
      const tB = moment(b.createdAt).valueOf();
      return tA - tB;
    };
    return list.sort(compareDate);
  };

  const handleChange = (
    { currentTarget }: React.BaseSyntheticEvent,
  ) => {
    const { id } = currentTarget;
    const value = currentTarget.type === 'checkbox'
      ? currentTarget.checked : currentTarget.value;

    if (id === 'task') {
      setByDate(!value);
      return setByTask(value);
    }
    if (id === 'date') {
      setByTask(!value);
      return setByDate(value);
    }
    setByStatus(value);
  };

  useEffect(() => {
    const filterByStatus = (list: ITask[]) => list
      .filter(({ status }) => status === byStatus);

    const orderTasks = () => {
      let filter = tasks;

      if (byTask) filter = orderByName(filter);
      if (byDate) filter = orderByDate(filter);
      if (byStatus) filter = filterByStatus(filter);
      return filter;
    };
    sortTasks(orderTasks());
  }, [byDate, byStatus, byTask, sortTasks, tasks]);

  return (
    <Form className="position-absolute bottom-0 start-50 translate-middle-x mb-2">
      <Form.Group>
        <Form.Check
          inline
          label="Ordem alfabética"
          name="task"
          type="radio"
          id="task"
          onChange={ handleChange }
          checked={ byTask }
        />
        <Form.Check
          inline
          label="Data de criação"
          name="date"
          type="radio"
          id="date"
          onChange={ handleChange }
          checked={ byDate }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label
          className="w-100 d-flex align-items-center justify-content-center"
          htmlFor="status"
        >
          Filtrar pelo Status:
          <Form.Select
            id="status"
            size="sm"
            className="w-50 mx-auto"
            onChange={ handleChange }
            value={ byStatus }
          >
            <option value="">{null}</option>
            { statusTask.map((task) => (
              <option key={ task }>{task}</option>
            )) }
          </Form.Select>
        </Form.Label>
      </Form.Group>
    </Form>
  );
}
