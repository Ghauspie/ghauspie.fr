import React from "react";
import './index.css';
import linkedin from './../../assets/linkedin-icon-2.svg';
import github from './../../assets/github.png';

const lienlinkedin="https://www.linkedin.com/in/guillaume-hauspie/";
function Footer(){
    return(
     <footer>
        <div className="footer-contact">
            <h3 className="h3-footer">Contact</h3>
                   <li>Phone : 0689656301</li>
                   <li>email : hauspie.guillaume@free.fr</li>
         </div>
         <div className="footer-zone">
             <h3 className="h3-footer">Mon secteur de recherche</h3>
             <p className="p-footer">J'habite actuellement vers Ardres et je recherche sur le secteur Lillois, Dunkerquois, Calasis, St omer, Bethune, Hazebrouck.</p>
             </div>
        <div className="footer-Mes-liens">
            <h3 className="h3-footer">Mes différents liens</h3>  
                    <a href="https://www.linkedin.com/in/guillaume-hauspie/" target="_blank" rel="noopener noreferrer"><img className="logo" src={linkedin} alt="Logo du lien Linkedin"></img></a>
                    <a href="https://github.com/Ghauspie/test-site" target="_blank" rel="noopener noreferrer"><img className="logo" src={github} alt="Logo du lien Linkedin"/></a>
        </div>
     </footer>    
    )
}
export default Footer;