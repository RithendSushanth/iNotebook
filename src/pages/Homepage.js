// import React from 'react'
// import Navbar from '../components/Navbar'
// import Home from '../components/Home'
// import Alert from '../components/Alert';
// import NightModeToggle from '../components/NightModeToggle';

// const Homepage = (props) => {
//   const {showAlert}=props
  
//   return (
//     <>
//       <Navbar/>
//       <Alert alert={alert}/>
//       {/* <NightModeToggle/>  */}
//       <Home showAlert={showAlert}/>

//     </>
//   )
// }

// export default Homepage

import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Alert from '../components/Alert';

const Homepage = (props) => {
  const { showAlert, alert } = props;

  return (
    <>
      <Alert alert={alert} />
      <Home showAlert={showAlert} />
    </>
  );
};

export default Homepage;
