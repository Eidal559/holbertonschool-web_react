import React from 'react';
import { getLatestNotification } from './utils';
import closeIcon from './assets/close-icon.png'; // ensure the path is correct

function Notifications() {
  const closeNotification = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        style={{ float: 'right' }}
        aria-label="Close"
        onClick={closeNotification}
      >
        <img src={closeIcon} alt="Close" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;
