import React, { useState, useLayoutEffect } from 'react'
import styled from 'styled-components'

import video from '../assets/videos/cameoPromo1.mp4'
import Seo from '../components/Seo'

const VideoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 0;
  margin-top: 0;

  ${({ headerHeight }: { headerHeight: number }) => (
    `height: calc(100vh - ${headerHeight});`
  )}
`

const Home = (): JSX.Element => {
  const [headerHeight, setHeaderHeight] = useState('0px')

  useLayoutEffect(() => {
    const header = typeof document !== 'undefined' && document.getElementById('header-wrapper')
    if (typeof window !== 'undefined' && header) {
      setHeaderHeight(window.getComputedStyle(header, null).getPropertyValue("height"))
    }
  }, [])

  return (
    <VideoWrapper headerHeight={headerHeight}>
      <Seo title='Home | Janelle Solviletti' />
      <video autoPlay muted loop >
        <source src={video} type='video/mp4' />
      </video>
    </VideoWrapper>
  )
}

export default Home