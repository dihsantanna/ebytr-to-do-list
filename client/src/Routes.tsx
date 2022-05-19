import React from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';

export function Routes() {
  return (
    <Switch>
      <Route path="/login" element={ <Login /> } />
      <Route path="/" element={ <Navigate to="/login" replace /> } />
    </Switch>
  );
}
