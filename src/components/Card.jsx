import React from 'react'

export default function Card({cardValue,color}) {
  return (
    <div style={{
        background: 'lightgray',
        margin: 'auto',
        border: '1px solid white',
        width:'170px',
        height:'200px',
        backgroundColor:color
    }}>
        <h1>{cardValue}</h1>
    </div>
  )
}
