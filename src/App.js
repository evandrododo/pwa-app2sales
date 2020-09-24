import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Projetos } from './pages/Projetos';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Projetos />
    </div>
  );
}

export default App;
