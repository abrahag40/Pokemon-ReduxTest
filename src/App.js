import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { createStore, combineReducers } from '@reduxjs/toolkit';
import CantidadPokemon from './components/cantidadPokemon';
import ComprarPokemon from './components/comprarPokemon';
import 'bootstrap/dist/css/bootstrap.css'
import store from './redux/store'
import BuscadorPokemon from './components/buscador/buscadorPokemon';
import ResultadoPokemon from './components/buscador/resultadoPokemon';

function App() {

  console.log( store.getState() );

  return (
    <div className="App container">
      <header className="row">
        {/* <Counter /> */}
        <div className="col-12">
          <div className="card mt-5 d-flex justify-content-center" style={{ maxWidth: "370px", margin: "auto" }}>
            <div className="row no-gutters">
              <div className="col-4">
                <img src="https://i.pinimg.com/originals/e8/1a/ac/e81aac26854750e5f7724892642907b1.jpg" className="card-img"/>
              </div>
              <div className="col-8">
                <div className="card-body">
                  <div className="card-title h3 text-center">
                    <CantidadPokemon />
                  </div>
                    <ComprarPokemon />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4 border-top pt3">
            <BuscadorPokemon />
          </div>
          <div className="col-12">
            <ResultadoPokemon />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
