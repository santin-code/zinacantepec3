import React from 'react'
import './sponsor.css'
import Shifu from '../../images/ELMAESTROSHIFU.png'

const Sponsor = () => {
  return (
    <div className='sponsor__container'>PATROCINADO POR:
    <img className='master__shifu' src={Shifu} alt="maestro shifu" />
     </div>
  )
}

export default Sponsor