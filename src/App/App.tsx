import './App.css';
import React, { Component } from 'react'
import Button from './components/ui/Button/Button';
import Navbar from './components/ui/Navbar/Navbar';
import MemeViewer, { demoMeme as defaultmeme, demoMeme } from './components/ui/MemeViewer/MemeViewer';
import MemeForm from './components/functionnal/MemeForm/MemeForm';
import FlexLayout from './components/layouts/FlexLayout/FlexLayout';
import MemeThumbnail from './components/layouts/MemeThumbnail/MemeThumbnail';
import { Switch, Route, Link } from 'react-router-dom'
import store from './store/store';

interface Props {

}
interface State {
  memes: Array<{ Meme }>,
  images: Array<{ Image }>,
  currentMeme: Meme
}

interface Meme {

  id?: number,
  imageId: number,
  text: string,
  x: number,
  y: number,
  fontSize: number,
  fontWeight: string,
  color: string,
  underline: boolean,
  italic: boolean
}

interface Image {
  url: string,
  titre: string,
  id: number,
  w: number,
  h: number
}


export default class App extends Component<Props, State> {
  state = { memes: [], images: [], currentMeme: demoMeme.meme }
  componentDidMount() {
    console.log(store);
  }

  componentDidUpdate() {
    console.log(arguments);
    console.log(this.state);
  }
  render() {
    return (
      <>
        {/*<div>{JSON.stringify(this.state)}</div>*/}

        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route path='/' exact>
              <h1> Test switch et route
              </h1>
              <h2> Un peu plus de texte</h2>
              |&nbsp;
              <Link to="/Thumbnail">Liens Thumbnail</Link>
              &nbsp;|&nbsp;
              <Link to="/Editor">Liens editor</Link>
              &nbsp;|&nbsp;
              <Link to="/inexistant">Liens non existant</Link>
              &nbsp;|
            </Route>
            <Route path='/Thumbnail'>
              <MemeThumbnail>
                {
                  this.state.memes.map((e: Meme, i: number) =>

                    <MemeViewer key={`thumb-view-${i}`} meme={e} image={this.state.images.find((elem: Image) => elem.id === e.imageId)} />

                  )
                }
              </MemeThumbnail>
            </Route>

            <Route path='/Editor'>
              <FlexLayout>
                <MemeViewer meme={this.state.currentMeme} image={this.state.images.find((e: Image) => e.id === this.state.currentMeme.imageId)} />
                <MemeForm />
              </FlexLayout>
            </Route>

            <Route path='/'>
              <h1>Error, URL does not exist</h1>
            </Route>
          </Switch>
        </div>
      </>
    )
  }
}