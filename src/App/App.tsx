import './App.css';
import React, { Component } from 'react'
import Button from './components/Button/Button';

interface Props {

}
interface State {
  counter: number
}

export default class App extends Component<Props, State> {
  state = { counter: 0 }
  componentDidMount(){
  }
  
  componentDidUpdate(){
    console.log(arguments);
    console.log(this.state);
  }
  render() {
    return (
      <div>
        Valeur du compteur :{this.state.counter}
        <Button onclickevent={() => {
          this.setState({counter:this.state.counter+1});
        }}> Cliquez ici </Button>
      </div>
    )
  }
}