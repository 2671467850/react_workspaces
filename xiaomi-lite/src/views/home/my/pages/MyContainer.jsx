import React, { useEffect, useContext, useState, useCallback } from 'react'
import MyUi from './MyUi'
import httpContext from '@/context/httpContext'

export default function MyContainer() {

  const { get } = useContext(httpContext)

  const [personalCenter, setPersonalCenter] = useState()

  useEffect(
    async () => {
      let result = await get({
        url: `/api/user`
      })
      // console.log(result.data.data);
      setPersonalCenter(result.data.data)
    },[]
  )

  return (
    <MyUi data={personalCenter}></MyUi>
  )
}
