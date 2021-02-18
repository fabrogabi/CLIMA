import React, {Fragment, useEffect, useState} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Clima from './components/Clima'
import Error from './components/Error'

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
        if(resultado.cod==="404"){guardarError(true)}
        //else{guardarError(false)}
      }
  }
    consultarApi();
  },[consultar])

  let componente;
  if (error){componente=<Error mensaje="no existe la ciudad"/>}
    else{ componente=<Clima 
      resultado={resultado}/> }





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
           {componente}
          </div>
        </div>
      </div>
    </div>

    </Fragment>
  );
}

export default App;
