import React from 'react';
import {LanguageCompData} from '../../data/LanguageCompData.js';
import ProgressBar from './ProgressBar.js';
import {FrameworkCompData} from '../../data/FrameworkCompData.js';
import './style.css';


const Competences = () => {
    console.log(LanguageCompData)
    return (
        <div className="KnowledgesContent">
            <div className="LanguagesFramework">
            <ProgressBar 
           Languages={LanguageCompData}
           className="languagesDisplay"
           title="Languages"
           /> 
            <ProgressBar 
           Languages={FrameworkCompData}
           className="FrameworkDisplay"
           title="Framework & bibliothèques"
           /> 
            </div>
            <div className="OtherSkills">
                Test de la fucking mort
            </div>
        </div>
    );
};

export default Competences;