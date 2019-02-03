import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ListPage from '../components/list-page'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ListPage />,
    document.body.appendChild(document.createElement('div')),
  )
});
