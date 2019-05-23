import React, { useState } from 'react'
import style from './Dropdown.module.css'

export default function Dropdown(props) {
  

  const options = [<Option key={"None"} index={0} name={"No room"} />]
  
  props.options.forEach((o, index) => {
    options.push(<Option key={o.name} index={index+1} name={o.name}/>);
  });
  
  const [selection, setSelection] = useState(0);
  const [expand, setExpand] = useState(false);


  function handleDropDown(name, index) {
    setExpand(!expand);
    if (expand) {
      setSelection(index);

      props.onSelect(name);
    }
    
  }

  function Option(props) {
    return (
      <div
        className={style.option}
        onClick={() => handleDropDown(props.name, props.index)}
      >
        {props.name}
      </div>
    )
  }
  return (

    <div>
      <h3>{props.name}</h3>
      {
        (expand)
        ? options
        : options[selection]
      }
    </div>





    // <div>
    //   <h4>{props.name}</h4>
      
    //   <select onChange={props.onChange}>
    //     <option value="No room">---</option>
    //     {props.options.map(o => {
    //       return <option
    //         key={o.name}
    //         value={o.name}
    //         >
    //           {o.name}
    //         </option>
    //     })}
    //   </select>
    // </div>
  )
}
