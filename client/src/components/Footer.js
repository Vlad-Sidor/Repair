import React from 'react';
import './css/Footer.css'
import Image from 'react-bootstrap/Image';
import Logo from '../assets/Group_6.png'

export default function App() {
  return (
    <div className=''>
      <div className='callthewizard'>
        <h1 className='callthewizardtitle'>Вызвать мастера</h1>
      </div>
      <div className='footer'>
        <Image className='logo' src={Logo}/>  
      </div>
    </div>
  );
}