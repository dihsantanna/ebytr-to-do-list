import React from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

export function Routes() {
  return (
    <Switch>
      <Route path="/login" element={ <Login /> } />
      <Route path="/home" element={ <Home /> } />
      <Route path="/" element={ <Navigate to="/login" replace /> } />
    </Switch>
  );
}
