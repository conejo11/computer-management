import React from 'react'
import ReactDOM from 'react-dom'
import {Route, NavLink, BrowserRouter} from "react-router-dom";


import FormComputer from './form'
import List from './computer-card'

class Header extends React.Component {
  render(){
    return (
      <RouteIndex />
    );
  }
}

class RouteIndex extends React.Component {
  render (){
    return (
      <BrowserRouter>
      <div>       
        <header className="head">
          <TextHeader/>
          <NavLink className="button-white" to="/index">ADICIONAR COMPUTADOR</NavLink>
           <NavLink className="button-white" to="/computer_list">LISTA DE COMPUTADORES</NavLink>
        </header>
        <div>
            <Route exact path="/" component={List} />
            <Route path="/index" component={FormComputer} />
            <Route path="/computer_list" component={List} />
        </div>   
      </div>  
      </BrowserRouter>
    );
  } 
}

class TextHeader extends React.Component {
  render (){
    return(
      <p>Listagem de Computadores</p>
    );
  }
}

export default Header
