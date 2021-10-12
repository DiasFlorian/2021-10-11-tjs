import './App.css';
import React, { Component } from 'react'
import Button from './components/ui/Button/Button';
import Navbar from './components/ui/Navbar/Navbar';
import MemeViewer, { demoMeme as defaultmeme } from './components/ui/MemeViewer/MemeViewer';
import MemeForm from './components/functionnal/MemeForm/MemeForm';
import FlexLayout from './components/layouts/FlexLayout/FlexLayout';
import { ADR_SRV, RESSOURCES_NAME } from './config/config';


interface Props {

}
interface State {
  memes: Array<{}>,
  images: Array<{}>
}

export default class App extends Component<Props, State> {
  state = { memes: [], images: [] }
  componentDidMount() {
    const pmemes = fetch(`${ADR_SRV}${RESSOURCES_NAME.memes}`).then(f => f.json());
    const pmimages = fetch(`${ADR_SRV}${RESSOURCES_NAME.images}`).then(f => f.json());
    Promise.all([pmemes,pmimages])
    .then(ar_ar=>{
      this.setState({memes:ar_ar[0], images:ar_ar[1]});
      return ar_ar;
    })
  }

  componentDidUpdate() {
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
            <MemeViewer meme={defaultmeme.meme} image={defaultmeme.image} />
            <MemeForm />
          </FlexLayout>
        </div>
      </>
    )
  }
}