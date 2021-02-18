import React,{useState} from 'react';
import Error from './Error'

const Formulario = ({busqueda,guardarBusqueda,guardarConsultar}) => {
    
  
    const [error,guardarError]=useState(false);

    //extraer ciudad y pais
    const {ciudad , pais}=busqueda;

    //funcion que coloca los elementos en el state
    const handleChace= e => {
        //actualizar state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
                       });}

    //cuando el usuario da submit al formulario 
    const handleSubmit= e =>{
        e.preventDefault();
        //validar 
        if ( ciudad==='' || pais==='')
        {
            guardarError(true);  
            return;
        }
      
        guardarError(false);
        guardarConsultar(true);
        

    }



    return (
        <form
        onSubmit={handleSubmit}
        >
            {error ? <Error mensaje="Todos los campos son obligatorios" /> : null }
            <div className="input-field col s12">
                <input 
                type="text"
                name="ciudad"
                id="ciudad"
                value={ciudad}
                onChange={handleChace}
                />
                <label htmlFor="ciudad" >Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select
                name="pais"
                id="pais"
                value={pais}
                onChange={handleChace}
                >
                    <option value="">--Seleccionae Pais--</option>
                    <option value="US">--EEUU--</option>
                    <option value="MX">--MEXICO--</option>
                    <option value="AR">--ARGENTINA--</option>
                    <option value="CO">--COLOMBIA--</option>
                    <option value="CR">--COSTA RICA--</option>
                    <option value="PE">--PERU--</option>

                </select>
                <label htmlFor="pais">: </label> 

            </div>
            <div className="input-fild col s12">
                <input
                    type="submit"
                    value="buscar clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />

            </div>
        </form>
    
    
        );
}
 
export default Formulario;