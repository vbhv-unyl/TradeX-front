import React from 'react'
import './GoogleButton.scss'

import { FcGoogle } from "react-icons/fc";

export default function GoogleButton( { onClick } ) {
  return (
    <div className='buttonContainer' onClick={ onClick }>
      <FcGoogle/>
      <span className='buttonText'>Log In with Google</span>
    </div>
  )
}

