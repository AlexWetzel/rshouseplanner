import React, { useContext } from 'react';
import style from './SidePanel.module.css';
import { Garden } from '../Layouts';
import Dropdown from '../Dropdown/Dropdown';
import { StoreContext } from '../../context/StoreContext';
import { types } from '../../context/reducers'

export default function SidePanel() {
  const { state, dispatch, actions } = useContext(StoreContext);

  // function test() {

  // }
  const roomData = {
    name: 'Garden',
    level: '1',
    price: '1000',
    hotSpots: [
      {
        name: 'Centrepiece',
        builds: [
          {
            name: 'Exit Portal',
            level: '1',
            materials: [
              { name: 'Iron Bar', quantity: 10}
            ]
          },
          {
            name: 'Decorative Rock',
            level: '5',
            materials: [
              { name: 'Limestone Brick', quantity: 5 }
            ]
          },
          {
            name: 'Pond',
            level: '10',
            materials: [
              { name: 'Soft Clay', quantity: 10}
            ]
          },
          {
            name: 'Imp Statue',
            level: '15',
            materials: [
              { name: 'Limestone Brick', quantity: 5 },
              { name: 'Soft Clay', quantity: 5 },
            ]
          },
          {
            name: 'Dungeon Entrance',
            level: '70',
            materials: [
              { name: 'Marble Brick', quantity: 1 }
            ]
          },
        ]
      }
    ]
  }
  return (
    <div className={`${style.sidePanel}`}>
      Test
      <Garden />
      <button onClick={() => actions.test()}>test</button>

      {roomData.hotSpots.map(hs => {
        return <Dropdown key={hs.name} name={hs.name} builds={hs.builds}/>
      })}
      
    </div>
  )
}
