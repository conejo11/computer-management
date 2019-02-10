import React from 'react';
import ReactDOM from 'react-dom';
import {Route, NavLink, BrowserRouter} from "react-router-dom";

import FormComputer from './form'
import List from './computer-card'

class ComputerList extends React.Component {
  render () {
    return (
      <React.Fragment>
        <RouteIndex computers={this.props.computers} />
      </React.Fragment>
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
                <div className="head-bttn">
                  <strong><NavLink className="button-white" to="/index">ADICIONAR COMPUTADOR</NavLink></strong>
                  <strong><NavLink className="button-white" to="/computer_list">LISTA DE COMPUTADORES</NavLink></strong>
                </div>
            </header>
            <div>
                <Route
                    exact path="/"
                    render={(props) => <List computers={this.props.computers} />}
                />
                <Route path="/index" component={FormComputer} />
                <Route
                    path="/computer_list"
                    render={(props) => <List computers={this.props.computers} />}
                />
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

class TextHeader extends React.Component {
  render (){
    return(
        <div className="header-title-conteiner">
          <h3 className="header-subtitle">LISTAGEM DE</h3>
          <h2 className="header-title">COMPUTADORES</h2>
        </div>
    );
  }
}

export default ComputerList
