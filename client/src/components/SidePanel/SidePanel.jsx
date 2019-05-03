import React from 'react';
import style from './SidePanel.module.css';
import Garden from '../Garden';
import Dropdown from '../Dropdown/Dropdown';

export default function SidePanel() {
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

      {roomData.hotSpots.map(hS => {
        return <Dropdown name={hS.name} builds={hS.builds}/>
      })}
      
    </div>
  )
}
