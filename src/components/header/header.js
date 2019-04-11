import React, {Component} from 'react';
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component{

    render(){
        return(
            <div className="header-container">
                <nav className="nav-container">
                        <FontAwesomeIcon icon={['fab', 'pinterest']} id="iconPinteres"/>
                        <input className="col-6" id="search-input" type="text" placeholder="Buscar" />
                        <button className="btn" >Inicio</button>
                        <button className="btn" >Siguiendo</button>
                        <button className="btn" ><FontAwesomeIcon icon="user" id="icon-user"/>Olga</button>
                        <FontAwesomeIcon icon="comment-dots" id="icon"/>
                        <FontAwesomeIcon icon="bell" id="icon"/>
                        <FontAwesomeIcon icon="ellipsis-h" id="icon"/>
                </nav>
            </div>
        )
    }
}
export default Header;