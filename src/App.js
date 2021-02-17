import React, {Fragment, useEffect, useState} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';

function App() {
  
  //state para el formulario
  const [busqueda,guardarBusqueda]=useState({pais:'',ciudad:''});
  const {pais,ciudad}=busqueda;

  const [consultar,guardarConsultar]=useState(false);

  useEffect(()=>{/*
    const consultarApi= async ()=>{
    if(consultar){
    const appId='a39d2c80b4e671e91e8f42363f35499a';
    const url='http://api.openweathermap.org/data/2.5/weather?q=jalisco,mx&appid=a39d2c80b4e671e91e8f42363f35499a'
    //const url=`api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    const repuesta= await fetch(url);
    const resultado= await  repuesta.json();
    console.log(resultado);
    console.log("dentro de api"); 
    }
    
    consultarApi();}
    console.log("fuera de api")
   
    */
   console.log("dentro de api")

  },[consultar]);





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
            2
          </div>
        </div>
      </div>
    </div>

    </Fragment>
  );
}

export default App;
