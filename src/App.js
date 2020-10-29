import './App.css';
import React from 'react';
import Photo from './Component/Profile/ProfilPhoto'
import Address from "./Component/Profile/Address";
import Full from "./Component/Profile/FullName";


function App() {
  return (
    <div className="App-header">
      <header className="App">
      <Photo/>
      <Address/>
      <Full/>

      </header>







    </div>
  );
}

export default App;
