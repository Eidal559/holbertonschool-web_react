import React from 'react';
import './Notifications.css';
import close from './close-icon.png'
import { getLatestNotification } from '../utils/utils';

export const Close = () => {
  return console.log('Close button has been clicked')
}

function Notifications() {
  const style = {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: 'transparent',
    border: 'none',
  }
  
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
      <button aria-label="Close" style={style} onClick={Close}>
        <img src={close} alt="close" />
      </button>
    </div>
  )
}

export default Notifications