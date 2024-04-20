import React from 'react'

export default function Winner({fullName,wins,lost,index}) {
  return (
    <tr>
        <td>{fullName}</td>
        <td>{wins}</td>
        <td>{lost}</td>
    </tr>
  )
}
