import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Header from './header'
import FormComputer from './form'

class FirstPage extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <FormComputer />
      </div>
    );
  }
}

export default FirstPage
