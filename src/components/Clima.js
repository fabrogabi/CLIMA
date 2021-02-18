import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {
    const {name ,main}=resultado;
    if(!name) return null;    
    return(
        
    <div className="card-panel white col s12">
        <div className="black-text ">
            <h2>El clima de {name} es: </h2>
            <p className="temperatura ">
                { parseFloat( main.temp-(273.15)).toFixed(2)+" ºc" }
            </p>
            <p> Temperatura Maxima 
                { parseFloat( main.temp_max-(273.15)).toFixed(2)+" ºc" }
            </p>
            <p> Temperatura Minima 
                { parseFloat( main.temp_min-(273.15)).toFixed(2)+" ºc" }
            </p>
        </div>
    </div>

    ); 
}

Clima.PropTypes = { 
    resultado: PropTypes.object.isRequired
 }
 
export default Clima;