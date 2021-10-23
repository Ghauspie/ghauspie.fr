import React from 'react';
import {ExpProData} from '../../data/ExpProData.js';
import './style.css';

const ExpPro = () => {
    return (
        <div>
        <h2 className="h2-exppro">Expérience Professionnelle</h2>
            <div className="expepro">
        {ExpProData.map((currentIframe)=>(
            <div className="vignetexp">
            <h3 className="h3-exppro">{currentIframe.Title} <a href={currentIframe.Lien}>{currentIframe.Lien}</a></h3>
            <h4 className="h4-exppro">{currentIframe.Date}</h4>
            <p>{currentIframe.Commentaire}</p>
            </div>            
        ))}
        </div>
        </div>
    );
};

export default ExpPro;