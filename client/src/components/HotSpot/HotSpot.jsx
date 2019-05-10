import React, { useContext } from 'react';
import style from './HotSpot.module.css';
import { StoreContext } from '../../context/StoreContext';
import { types } from '../../context/reducers';

export default function HotSpot(props) {
  const { state, dispatch } = useContext(StoreContext);
  const { selectedHotSpot } = state;

  function checkForSelection() {
    if(selectedHotSpot === props.name) {
      return style.hotSpotSelect;
    }
  }

  return (
    <span>
      {props.position.map((p, index) => {
        const [t,r,b,l] = p;
  
        const position = {
          top: t+'%',
          right: r+'%',
          bottom: b+'%',
          left: l+'%',
        }
        return (
        <span
          key={props.name + index}
          className={`${style.hotSpot} ${checkForSelection()}`}
          style={position}
          onClick={() => dispatch({ type: types.selectHotSpot, payload: props.name })}
        >
          <p>{props.name}</p>
        </span>
        )
      })}
    </span>


  //   <svg className={`${style.hotSpot}`} height='400px' width='400px'>
  //   <polygon className={`${style.poly}`} points={'150,150 250,150 250,250 150,250'}/>
  // </svg>
  )
}
