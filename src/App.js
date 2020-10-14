import React from 'react';
import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import {Context} from './Context';

function App() {
  return (
    <Context>
    <div className="App">
    <MovieList />
    <Nav />
    </div>
    </Context>
  );
}

export default App;
