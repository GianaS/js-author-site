import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Seo from '../components/Seo'
import roseImage from '../assets/images/rose-transparent.png'
import coverImage from '../assets/images/cameo-cover.png'
import { fonts, colors } from '../styles/styles'
import { useMedia } from '../utilities'

const PageWrapper = styled.div`
  ${({ headerHeight }: { headerHeight: string }) => (
    `height: calc(100vh - ${headerHeight});`
  )}

  background-image: url(${roseImage});
  background-size: contain;
  background-repeat: no-repeat;
`

const Title = styled.h1`
  font-family: ${fonts.montserrat};
  font-weight: 400;
  padding-bottom: 20px;
`

const Flexbox = styled.div`
  display: flex;
  padding-bottom: 80px;

  @media (max-width: 700px) {
    flex-direction: column;
    padding-bottom: 40px;
  }
`

const ImageWrapper = styled.div`
  height: 48vh;

  img {
    height: 100%;
    box-shadow: 2px 4px 15px ${colors.grey};
  }

  @media (max-width: 700px) {
    padding-bottom: 30px;
  }
`

const Text = styled.p`
  font-family: ${fonts.montserrat};
  line-height: 1.7;
  font-size: 18px;
  padding-bottom: 10px;
`

const RightColumn = styled.div`
  padding-left: 40px;

  @media (max-width: 700px) {
    padding-left: 0;
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  background-color: ${colors.beige};
  color: ${colors.white};
  padding: 9px 13px;
  font-size: 16px;
  border-radius: 5px;
  font-family: ${fonts.montserrat};

  :hover {
    color: ${colors.white};
    opacity: .9;
  }
`

const Cameo = (): JSX.Element => {
  const bookDescription: JSX.Element = <Text>“I wish to disunite the postulation that love and time are one and the same.” <i>The Cameo</i> is a short collection of poetry and prose depicting the damage of two souls intertwining, as well as the even bolder proposition that romantic disillusion itself is a mirage. A metaphysical investigation into desire, disorder, and the natural world.</Text>
  const amazonLink: string = 'https://www.amazon.com/dp/B08JLXYL38?ref_=pe_3052080_397514860'

  const navBreakpoint = typeof window !== 'undefined'
    ? useMedia('(max-width: 700px)')
    : undefined

  const [headerHeight, setHeaderHeight] = useState<string>('0px')

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const headerElement = document.getElementById('header-wrapper')
      if (typeof window !== 'undefined' && headerElement) {
        setHeaderHeight(window.getComputedStyle(headerElement, null).getPropertyValue('height'))
      }
    }
  }, [])

  return (
    <PageWrapper headerHeight={headerHeight}>
      <Seo title='The Cameo | Janelle Solviletti' />
      <Title>The Cameo</Title>
      <Flexbox>
        <ImageWrapper>
          <img
            src={coverImage}
            alt='cameo book cover'
          />
        </ImageWrapper>
        <RightColumn>
          {!navBreakpoint ? bookDescription : null}
          <div style={{ paddingBottom: '20px' }}><StyledLink href={amazonLink}>Order now</StyledLink></div>
          {navBreakpoint ? bookDescription : null}
        </RightColumn>
      </Flexbox>
      <Flexbox>
        <Text>
          Music transcends through time. Over the years, these songs were part of the making of The Cameo,  and whisper secrets in the margins. Before you turn the page, tune in to the place where it all began.          </Text>
        <iframe
          src='https://open.spotify.com/embed/playlist/4zwUWpSsVgrRwAWObakMTw'
          width='300'
          height='380'
          frameBorder='0'
          allow='encrypted-media'
        />
      </Flexbox>
    </PageWrapper>
  )
}

export default Cameo