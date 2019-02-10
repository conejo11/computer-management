import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Header from '../components/header'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ComputerList />,
    document.body.appendChild(document.createElement('div')),
  )
});