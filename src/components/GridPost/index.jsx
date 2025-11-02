import './gridpost.css'

import test1 from '../../assets/placehover.jpeg'
import aranha from '../../assets/aranha.jpg'
import images from '../../assets/images.jpg'
import test2 from '../../assets/meusegundo place.jpeg'
import carro from '../../assets/carro.jpg'
import ciencia from '../../assets/ciencia.jpg'

import Popup from '../Popup/index'
import { useState } from 'react'


export default function GridPost(){

  const [popupAtivo, setPopupAtivo] = useState(false)

  function abrirPopup() {
    setPopupAtivo(true)
  }

  function fecharPopup() {
    setPopupAtivo(false)
  }

  return (
    <>
      <div className='gridImgPost'>
        <div id='post' onClick={abrirPopup}><img src={test1} /></div>
        <div id='post' onClick={abrirPopup}><img src={aranha} /></div>
        <div id='post' onClick={abrirPopup}><img src={images} /></div>
        <div id='post' onClick={abrirPopup}><img src={carro} /></div>
        <div id='post' onClick={abrirPopup}><img src={ciencia} /></div>
      </div>

      {popupAtivo && <Popup fechar={fecharPopup} />}

    </>
  )
}