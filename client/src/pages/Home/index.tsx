import React from 'react';
import { Header } from '../../components/Header';
import { ToDoList } from '../../components/ToDoList';

export function Home() {
  return (
    <>
      <Header />
      <section style={ { backgroundColor: '#FBFBFC', height: 'calc(100vh - 9rem)' } }>
        <ToDoList />
      </section>
    </>
  );
}
