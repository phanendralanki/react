import { useRouteError } from 'react-router-dom'

import React from 'react'


const Error = () => {
  const err = useRouteError();
  return (
    <div>
      Something went wrong
      <h3>{err.status} {err.statusText}</h3>
    </div>
  )
}

export default Error
