import './App.css';
import React, { Component } from 'react'
import Button from './components/ui/Button/Button';
import Navbar from './components/ui/Navbar/Navbar';
import MemeViewer, {demoMeme as defaultmeme} from './components/ui/MemeViewer/MemeViewer';
import MemeForm from './components/functionnal/MemeForm/MemeForm';
import FlexLayout from './components/layouts/FlexLayout/FlexLayout';


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
      <>
      <div>{JSON.stringify(this.state)}</div>

      <div className="App">
        <Navbar></Navbar>
        <FlexLayout>
          <MemeViewer meme={defaultmeme.meme} image={defaultmeme.image}/>
          <MemeForm />
        </FlexLayout>
      </div>
      </>
    )
  }
}