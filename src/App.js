import React from 'react';
import Landing from "./pages/Landing/Landing"
import Navbar from "./components/Navbar/Navbar"
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
   <Landing />
    </div>
  );
}

export default App;
