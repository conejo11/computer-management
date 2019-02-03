import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import FirstPage from '../components/first-page'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <FirstPage />,
    document.body.appendChild(document.createElement('div')),
  )
});
