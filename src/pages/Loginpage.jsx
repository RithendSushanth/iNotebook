import React from 'react'
import Login from '../components/Login'
import Navbar from '../components/Navbar'


const Loginpage = (props) => {
  const{showAlert}=props;
  return (
    <div>
        
      <Login showAlert={showAlert}/>
    </div>
  )
}

export default Loginpage
