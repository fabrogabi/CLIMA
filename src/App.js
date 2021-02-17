import React, {Fragment, useEffect, useState} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Clima from './components/Clima'

function App() {
  
  //state para el formulario
  const [busqueda,guardarBusqueda]=useState({pais:'',ciudad:''});
  const {pais,ciudad}=busqueda;

  const [consultar,guardarConsultar]=useState(false);
  const [resultado,guardarResultado]=useState({});
  const [error,guardarError]=useState(false);

  useEffect(()=>{
    
    const consultarApi = async ()=>{
      if (consultar){
        const appId='a39d2c80b4e671e91e8f42363f35499a';
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
        const repuesta= await fetch(url);
        const resultado= await  repuesta.json();
        guardarResultado(resultado);
        
        guardarConsultar(false);
      }
  }
    consultarApi();
  },[consultar])





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
            guardarConsultar={guardarConsultar}
            />
          </div>
          <div className="col-m6-s12">
            <Clima 
            resultado={resultado}/>
          </div>
        </div>
      </div>
    </div>

    </Fragment>
  );
}

export default App;
