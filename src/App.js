import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import {ConditionalSection} from './components/Conditional.js'

function Element(props) {
  return (
    <div className="element">
      {props.children}
    </div>
  )
}

class App extends React.Component {

  state = {
    estado: false,
  };

  lookForData = e => {
    this.setState({estado: e});
    console.log(this.state.estado)
  }

  render(){
    return (
      <div className="App">
        <NavBar lookFor={this.lookForData} />
        <div className="container" style={{'paddingTop' :'9vh'}}>
          <Element>
            <ConditionalSection estado={this.state.estado}/>
          </Element>
        </div>
      </div>
    );
  }
}

export default App;
