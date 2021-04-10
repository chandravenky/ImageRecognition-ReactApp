import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onSubmit}) =>
{
    return (
        <div className= 'ma4 mt0'>
            <p className = 'white f3'>
                {'This detective will detect faces in your picture!'}
            </p>
            <div className = "center">
                <div className = "form center pa4 br3 shadow-3">
                    <input className = "f4 pa2 w-70 center" type = 'text' onChange = {onInputChange}></input>
                    <button className = "w-30 grow f4 link ph3 pv2 white bg-light-purple pointer" onClick = {onSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;