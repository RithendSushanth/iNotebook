import React from 'react'
import Signup from '../components/Signup'
import Navbar from '../components/Navbar'

const SignupPage = (props) => {
  const{showAlert}=props;
  return (
    <div>
      <Signup showAlert={showAlert}/>
    </div>
  )
}

export default SignupPage
