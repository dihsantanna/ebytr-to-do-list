import React from 'react';
import { Header } from '../../components/Header';

export function Home() {
  return (
    <>
      <Header />
      <section style={ { backgroundColor: '#FBFBFC', height: 'calc(100vh - 9rem)' } }>
        Home
      </section>
    </>
  );
}
