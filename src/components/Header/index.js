import { render } from "@testing-library/react";
import logo from './../../assets/logo.svg';
import symfony from './../../assets/symfony.svg';
import React from "react";
import me from './../../assets/me.jpg';
import './style.css';

function Header() {
    return (
        <header className="App-header">
            <img src={me} className="avatar" alt ="avatar" />
            <div className="App-myprofil">
            <div className="App-logoHeader">
        <img src={symfony} className="App-logosymfony" alt="logo Symfony" />
        <img src={logo} className="App-logo" alt="logo React" />
        </div>                 
            <div className="App-mysearch">
                <h1>Développeur web junior (spé symfony)</h1>
                <h2> Hauspie Guillaume</h2>
                <p>Actuellement à la recherche d'un CDI,CDD ou stage</p>
            </div>    
        </div>
        
      </header>
    )
}

export default Header;