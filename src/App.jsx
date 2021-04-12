import React from 'react';
import Contador from './components/Contador';
import Usuarios from './components/Usuarios';

function App() {
  return (
    <div className="container">

      <Usuarios></Usuarios>

      <hr/>

      <Contador></Contador>

    </div>


  );
}

export default App;
