import React from 'react'

export default function Dropdown(props) {

  return (
    <div>
      <h4>{props.name}</h4>
      
      <select onChange={props.onChange}>
        <option value="No room">---</option>
        {props.options.map(o => {
          return <option
            key={o.name}
            value={o.name}
            >
              {o.name}
            </option>
        })}
      </select>
    </div>
  )
}
