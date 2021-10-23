import React from "react";
import MyIframe from "./iframe";
import './index.css';


function Me(){
    return(
        <div>
            <h2>Bienvenue sur mon nouveaux C.V en full React</h2>
            <p> Pour parler un peu de moi. Actuellement agés de 34 ans. Ancien Technicien informatique, mais ayant toujours eu un penchant pour le développement. Et qui aujourd'hui, je me lance dans ce merveilleux monde de la programmation. </p>
            <h3> Mes différents projets perso</h3>
            <MyIframe />
    {/*         <div className="carousel">
              
                <iframe src="https://ghauspie.fr" className="Me-iframe"/>
                <iframe src="https://obook.fr" className="Me-iframe"/>
                <iframe src="https://admin.obook.fr" className="Me-iframe"/>
                </div> */}
            </div>
    )
}

export default Me;