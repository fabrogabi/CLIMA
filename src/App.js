import React, {Fragment, useState} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';

function App() {
  const [busqueda,guardarBusqueda]=useState({pais:'',ciudad:''});
  const {pais,ciudad}=busqueda;


  return (
    <Fragment>
      
    <Header titulo={'Clima React'} />
    <div className="contenedor-form">
      <div className="container">
        <div className="row">
          <div className="col-m6-s12">
            <Formulario 
            busqueda={busqueda}
            guardarBusqueda={guardarBusqueda}
            />
          </div>
          <div className="col-m6-s12">
            2
          </div>
        </div>
      </div>
    </div>

    </Fragment>
  );
}

export default App;
