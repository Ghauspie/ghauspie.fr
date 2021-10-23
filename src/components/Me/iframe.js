import React from "react";
import './index.css';
import {IframeData} from '../../data/IframeData.js';

const MyIframe= () =>(
    <div className="carousel">
        {IframeData.map((currentIframe)=>(
            <iframe key={currentIframe.id} src={currentIframe.Iweb} className="Me-iframe"/>        
        ))}
    </div>
);

export default MyIframe;