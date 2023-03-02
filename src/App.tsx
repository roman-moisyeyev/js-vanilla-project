import React from 'react';
import logo from './logo.svg';
import './App.css';
import {User} from "./06/06-callback";
import {ManComponent} from "./07/07";

function App() {
  return (
    <div className="App">
      <ManComponent title={'sed'} man={'john'}/>
    </div>
  );
}

export default App;
