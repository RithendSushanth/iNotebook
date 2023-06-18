import React, { useState } from 'react';
import './NightModeToggle.css'; 

// Starting of the program
const NightModeToggle = () => {

  // Defining a boolean state which will be used to know the status of the mode
  const [isNightMode, setIsNightMode] = useState(false);


  const handleToggle = () => {
    setIsNightMode(!isNightMode);
  };

  // for shadow animation 
  const buttonShadowColor = isNightMode ? 'white' : 'black';

  return (
    <div className={`app ${isNightMode ? 'night-mode' : 'light-mode'}`}>
      <div className="content">
        <h1>Welcome to the {isNightMode ? 'Night Mode' : 'Light Mode'}</h1>
        <p>Hype</p>        
          <button className='rounded-btn ' type='button' onClick={handleToggle}
            style={{ boxShadow: `0 0 5px ${buttonShadowColor}`}}  >
            {/* icons from ionicons */}
          {isNightMode? <ion-icon name="sunny"></ion-icon> : <ion-icon name="moon"></ion-icon>}
          
          </button>
        
      </div>
    </div>
  );
};

export default NightModeToggle;

