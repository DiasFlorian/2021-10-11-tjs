import React from 'react';
import './App.css';
import Button from './components/Button/Button';
  

function App() {
  return (
    <div className="App">
      <Button onclickevent={ function (argument1) {
        console.log(argument1);
      } }>
        <img alt="" src="https://cdn.pixabay.com/photo/2019/09/23/04/50/jellyfish-4497496_960_720.jpg"/> 
        Cliquez ici
      </Button>
      <Button onclickevent={()=>{}} text="Un bouton"/>
    </div>
  );
}

export default App;
