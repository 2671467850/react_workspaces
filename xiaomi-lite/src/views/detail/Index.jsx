import React from 'react'
import { useLocation } from 'react-router-dom'
import Detail from './pages/DetailContainer'

import withAnimation from '@/hoc/withAnimation'

function Index() {
  const { state } = useLocation()
  // console.log(state);
  return (
    <>
      <Detail data={state}></Detail>
    </>
  )
}

export default withAnimation(Index)