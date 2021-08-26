import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import "./App.css"
import PokemonPage from './PokemonPage';



function App() {

  return (
    <div className="mainContainer">
        <Navbar/>
        <PokemonPage/>
        <footer>
            <Footer/>
        </footer>
    </div>
  );
}

export default App;
