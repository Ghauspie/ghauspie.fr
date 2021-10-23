import React from 'react';
import { DiplomeData } from '../../data/DiplomeData';
import './style.css';


const Diplomes = () => {
    return (
        <div>
             <h2 className="h2-diplome">Mes Diplomes</h2>
            <div className="vidiplome">
        {DiplomeData.map((currentIframe)=>(
            <div className="vignet-Diplome">
            <h3 className="h3-diplome">{currentIframe.Title} <a href={currentIframe.Lien}>{currentIframe.Lien}</a></h3>
            <h4 className="h4-diplome">{currentIframe.Date}</h4>
            <p>{currentIframe.Commentaire}</p>
            </div>            
        ))}
        </div> 
        </div>
    );
};

export default Diplomes;