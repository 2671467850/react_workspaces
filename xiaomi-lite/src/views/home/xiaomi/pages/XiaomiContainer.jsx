import React, { useEffect } from 'react'
import XiaomiUi from './XiaomiUi'
import { useDispatch } from 'react-redux'
import { getdata } from '../index'
import { useSelector } from 'react-redux'

export default function XiaomiContainer() {

  const dispatch = useDispatch()
  const data = useSelector(state => state.getIn(['xiaomi', 'data']))

  useEffect(()=>{
    dispatch(getdata())
  },[]
  )

  return (
    <XiaomiUi data={data}></XiaomiUi>
  )
}
