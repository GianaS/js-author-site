import React, { useState, useLayoutEffect } from 'react'

import video from '../assets/videos/cameoPromo1.mp4'
import Seo from '../components/Seo'

const Home = (): JSX.Element => {
  return (
    <>
      <Seo title='Home | Janelle Solviletti' />
      <video width='100%' height='auto' autoPlay muted loop playsInline >
        <source src={video} type='video/mp4' />
      </video>
    </>
  )
}

export default Home