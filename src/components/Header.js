import React, {Fragment} from 'react';
import PropTypes from 'prop-types';


const Header = ({titulo}) => {
    return ( 
           <nav>
                <div className="nav-wrapper light-blue darken-2">
                    <a href="#!" className="brand-logo"> {titulo} </a>         
                </div>
            </nav>
     );
}


Formulario.PropTypes = { 
    titulo: PropTypes.string.isRequired
 }
export default Header;