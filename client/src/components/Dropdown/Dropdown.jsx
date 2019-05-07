import React from 'react'

export default function Dropdown(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      
      <select>
        {props.builds.map( b => {
          return <option key={b.name}>{b.name}</option>
        })}
      </select>
    </div>
  )
}
