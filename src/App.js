import React from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/navigation/Navigation.js'
import Logo from './components/Logo/Logo.js'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import Rank from './components/Rank/Rank.js'
import 'tachyons';


const particlesOptions = {
    particles: {
      line_linked: {
        shadow: {
          enable: true,
          color: "#3CA9D1",
          blur: 5
        }
      },
    number: {
      value:100,
      density: {
        enable: true,
        value_area: 800
      }
    }
    }
  }

class App extends React.Component {
  render() {

    return (
      <div className="App">

      <Particles className= "particles"
                params={particlesOptions} />

      <Navigation />
      
      <Logo />

      <Rank />

      <ImageLinkForm />

      {/* {

      

      <faceRecognition />} } */}


      </div>
    );
    
  }  
}

export default App;
