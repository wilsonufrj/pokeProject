import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import "./App.css"
import PokemonPage from './PokemonPage';

import store from './store';
import { Provider } from 'react-redux';



class App extends React.Component{
  render(){
      return(
        <div className="mainContainer">
            <Provider store = {store}>
              <Navbar/>
              <PokemonPage/>
              <Footer/>
            </Provider>
        </div>
      );
  }

}



export default App;
