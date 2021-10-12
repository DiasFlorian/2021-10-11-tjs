import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import * as RGUI from 'react-graphical-ui';

  

function App() {
  return (
    <div className="App">
      <Button 
      onclickevent={ function (argument1) {
        console.log(argument1);
      } }
      >
        <img alt="" src="https://cdn.pixabay.com/photo/2019/09/23/04/50/jellyfish-4497496_960_720.jpg"/> 
        Cliquez ici
      </Button>
      <Button style={{textDecoration:'underline'}} text="Un bouton" color='blue'/>
      <RGUI.Circular value={47}  max={100} display="inline" withGrid={true} />
      <RGUI.Histogram values={[ 20, 80, 19]} notAllreadyFull={true} whithGrid={true} gridDivisionCount={5} max={150} />
    </div>
  );
}

export default App;
