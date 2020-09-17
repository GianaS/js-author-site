import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'

import Video from '../assets/videos/cameoPromo1.mp4'
import Header from '../components/Header'

const VideoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ${({ headerHeight }: { headerHeight: number }) => {
    return (
      headerHeight ? `height: calc(100% - ${headerHeight}px);` : 'height: 100%;'
    )
  }}
`

const Home = (): JSX.Element => {
  const [headerHeight, setHeaderHeight] = useState(0)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight)
  }, [headerRef])

  return (
    <>
      <Header ref={headerRef} />
      <VideoWrapper headerHeight={headerHeight}>
        <video autoPlay muted loop style={{ height: `calc(100% - ${headerHeight}})` }}>
          <source src={Video} type='video/mp4' />
        </video>
      </VideoWrapper>
    </>
  )
}

export default Home