import React from 'react'
import { Route } from 'react-router-dom'
import Home from './src/container/Home'

export default (
  <React.Fragment>
    <Route path='/' exact component={Home}></Route>
  </React.Fragment>
)