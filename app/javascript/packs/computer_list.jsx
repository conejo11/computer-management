import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ComputerList from '../components/ComputerList'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ComputerList />,
    document.body.appendChild(document.createElement('div')),
  )
});
