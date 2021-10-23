import React from "react";
import './index.css';
import {NavLink} from 'react-router-dom';

function Nav(){
    return(
        <nav>
            <li><NavLink exact to ="/" activeClassName="navActive">Acceuil</NavLink></li>
            <li><NavLink exact to ="/Diplomes" activeClassName="navActive">Mes diplômes</NavLink></li>
            <li><NavLink exact to ="/ExpPro" activeClassName="navActive">Mes expériences Professionnelles</NavLink></li>
            <li><NavLink exact to ="/Passions" activeClassName="navActive">Mes passions</NavLink></li>
             <li><NavLink exact to ="/Competences" activeClassName="navActive">Mes compétences</NavLink></li>
             <li><NavLink exact to ="/Speak" activeClassName="navActive">I speak ?</NavLink></li>
        </nav>
    )
}

export default Nav;