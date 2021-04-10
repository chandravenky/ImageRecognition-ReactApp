import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageurl, box}) =>
{
    return (
        <div className= 'center ma'>
            <div className = 'absolute mt2'>
                <img id = 'inputimage' alt = '' src = {imageurl} width= '200' height= 'auto' />
                <div className = "bounding-box" style = {{left: box.leftCol, right: box.rightCol, top: box.topRow, bottom: box.bottomRow}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;