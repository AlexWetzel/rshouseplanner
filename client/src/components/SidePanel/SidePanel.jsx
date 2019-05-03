import React from 'react';
import style from './SidePanel.module.css';
import Garden from '../Garden';

export default function SidePanel() {
  return (
    <div className={`${style.sidePanel}`}>
      Test
      <Garden />
    </div>
  )
}
