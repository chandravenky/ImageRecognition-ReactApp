import React from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/navigation/Navigation.js'
import Logo from './components/Logo/Logo.js'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import Rank from './components/Rank/Rank.js'
import 'tachyons';
import Clarifai from 'clarifai'
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js'
import Signin from './components/Signin/Signin.js'
import Register from './components/Registration/Register.js'


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

const app = new Clarifai.App({

  apiKey: '396c7f4f13a84750a45d1179d35e5ba7'

});

class App extends React.Component {

  constructor() {
    super()
    this.state = {

      input: '',
      imageurl: '',
      box: {},
      route: 'signIn',
      isSignedIn: false,
    }
  }

calculateFaceLocation = (data) => {

    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;

    const image = document.getElementById('inputimage')

    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }

}

displayFaceBox = (box) => {
  console.log(box);
  this.setState({box})
}

onInputChange = (event) => {

    this.setState({input: event.target.value})
  }
  
  onSubmit = () => {
    this.setState({imageurl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(response => this.displayFaceBox(this.calculateFaceLocation(response))).catch(err => console.log(err));

      }

onRouteChange = (route) => {
  if (route === 'signout'){
    this.setState({isSignedIn: false})
  } else if (route=== 'home') {
    this.setState({isSignedIn: true})
  }
  this.setState({route: route})
}

  render() {

    return (
      <div className="App">

      <Particles className= "particles"
                params={particlesOptions} />

      <Navigation isSignedIn= {this.state.isSignedIn} onRouteChange = {this.onRouteChange}/>
      {this.state.route === "home"
        ? <div>
        <Logo />

          <Rank />

          <ImageLinkForm onInputChange = {this.onInputChange} onSubmit = {this.onSubmit}/>

          <FaceRecognition box= {this.state.box} imageurl = {this.state.imageurl}/>
        </div>
        : (
          this.state.route === "signIn"
          ? <Signin onRouteChange = {this.onRouteChange}/>
          : <Register onRouteChange = {this.onRouteChange}/>


        )
        
    }
      </div>
    );
    
  }  
}

export default App;
