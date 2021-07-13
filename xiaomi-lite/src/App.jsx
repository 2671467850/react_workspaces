import React, { useCallback } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home from '@/views/home/Home'
import Detail from '@/views/detail/Index'

import { BrowserRouter as Router } from 'react-router-dom'

export default function App() {

  const home = useCallback(
    props => {
      return <Home index={1} {...props}></Home>
    },
    [],
  )

  const detail = useCallback(
    props => {
      return <Detail index={3} {...props}></Detail>
    },
    [],
  )

  return (
    <div style={{height: '100%',position: 'relative'}}>
      <Route 
        path="/home"
        children={home}
      ></Route>
      <Route
        path="/detail"
        children={detail}
      ></Route>
      <Redirect from="/" to="/home"></Redirect>
    </div>
  )
}
