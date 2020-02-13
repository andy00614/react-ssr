import React from 'react'
import { Route } from 'react-router-dom'
import Home from './src/container/Home'
import Login from './src/container/Login'

export default [
  {
    path: '/',
    component: Home,
    loadData: () => Home.loadData,
    key:'home'
  },{
    path: '/login',
    component: Login,
    exact: true,
    key:'login'
  }
]

// export default (
//   <React.Fragment>
//     <Route path='/' exact component={Home}></Route>
//     <Route path='/login' exact component={Login}></Route>
//   </React.Fragment>
// )