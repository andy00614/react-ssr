import React from 'react'
import ReactDom from 'react-dom'
import Home from '../container/Home'

ReactDom.hydrate(<Home />,document.getElementById('root'))

console.log('同构js')