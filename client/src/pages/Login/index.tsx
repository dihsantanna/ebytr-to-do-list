import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import logo from '../../assets/logo_ebytr.svg';
// import { loginRequest, tokenValidate } from '../../service/api';
import { ILogin } from '../../types/login.interface';
import { LoginFieldTypes } from '../../types/loginFields.types';
import { loginFieldsTypes } from '../../utils/loginFieldsType';
import { loginSchema } from '../../validations/login.validation';

export function Login() {
  const navigate = useNavigate();

  const isLogged = useCallback(async () => {
    // const token = localStorage.getItem('token');
    // if (token) {
    //   const user = await tokenValidate(token);
    //   if (!user.error) {
    //     navigate('/home');
    //   }
    // }
  }, []);

  useEffect(() => {
    isLogged();
  }, [isLogged]);

  const [dataLogin, setDataLogin] = useState({
    email: '',
    password: '',
  });
  const [messageError, setMessageError] = useState('');
  const [submitEnabled, setSubmitEnabled] = useState(false);

  const handleLoginBtn = (newState: ILogin) => {
    const { error } = loginSchema.validate(newState);
    if (!error) setSubmitEnabled(true);
    if (error && submitEnabled) setSubmitEnabled(false);
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;
    setDataLogin((prevState) => {
      const newState = {
        ...prevState,
        [name]: value,
      };
      handleLoginBtn(newState);
      return newState;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const data = await loginRequest(dataLogin);
    // if (!data.error) {
    //   localStorage.setItem('token', JSON.stringify(data.token));
    //   navigate('/home');
    //   return;
    // }
    // setMessageError(data.error);
    setMessageError(''); // remover após descomentar o código comentado.
    navigate('/home'); // remover após descomentar o código comentado.
  };

  return (
    <div
      // eslint-disable-next-line max-len
      className="vw-100 vh-100 d-flex flex-column justify-content-start align-items-center"
    >
      <img
        className="mb-5 mt-4"
        src={ logo }
        alt="logo Ebytr to do list"
      />
      <Form
        className="form-login w-50"
        onSubmit={ handleSubmit }
      >
        { Object.entries(loginFieldsTypes).map(([key, value]) => (
          <Form.Group
            key={ key }
            className="mb-3"
          >
            <Form.Label
              htmlFor={ key }
            >
              {value.name}
              :
            </Form.Label>

            <Form.Control
              name={ key }
              id={ key }
              type={ value.type }
              value={ dataLogin[key as LoginFieldTypes] }
              onChange={ handleChange }
            />
          </Form.Group>
        )) }
        <Button
          disabled={ !submitEnabled }
          type="submit"
          className="d-grid gap-2 col-12 mx-auto text-bg-success p-2 bg-success"
        >
          Login
        </Button>
      </Form>
      <div className="alert mt-4">
        {
          messageError || null
        }

      </div>
    </div>
  );
}
