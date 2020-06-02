import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Header from './collections/Header'
import Credit from './collections/Credit'

import AiriSato from './pages/AiriSato'

const App = props => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/airi-sato' component={AiriSato} />
          <Route path='/' component={Header} />
        </Switch>
      </Router>

      <Credit />
    </>
  )
}

export default App
