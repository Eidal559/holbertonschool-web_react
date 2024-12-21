import React from 'react';

function Notifications() {
  const handleClose = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div>
      <h2>Here is the list of notifications</h2>
      <ul>
        <li>Notification 1</li>
        <li>Notification 2</li>
        <li>Notification 3</li>
      </ul>
      <button onClick={handleClose}>Close</button>
    </div>
  );
}

export default Notifications;
