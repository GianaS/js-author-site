import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Seo from '../components/Seo'
import roseImage from '../assets/images/rose-transparent.png'
import coverImage from '../assets/images/cameo-cover.png'
import { fonts, colors } from '../styles/styles'

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
`

const ImageWrapper = styled.div`
  height: 48vh;

  img {
    height: 100%;
    box-shadow: 2px 4px 15px ${colors.grey};
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
`

const StyledLink = styled.a`
  text-decoration: none;
  background-color: ${colors.beige};
  color: ${colors.white};
  padding: 9px 13px;
  font-size: 16px;
  border-radius: 5px;

  :hover {
    color: ${colors.white};
    opacity: .9;
  }
`

const Cameo = (): JSX.Element => {
  const bookDescription: JSX.Element = <Text>“I wish to disunite the postulation that love and time are one and the same.” <i>The Cameo</i> is a short collection of poetry and prose depicting the damage of two souls intertwining, as well as the even bolder proposition that romantic disillusion itself is a mirage. A metaphysical investigation into desire, disorder, and the natural world.</Text>
  const amazonLink: string = 'https://www.amazon.com/dp/B08JLXYL38?ref_=pe_3052080_397514860'

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
      <Flexbox style={{ paddingBottom: '100px' }}>
        <ImageWrapper>
          <img
            src={coverImage}
            alt='cameo book cover'
          />
        </ImageWrapper>
        <RightColumn>
          {bookDescription}
          <StyledLink href={amazonLink}>Order now</StyledLink>
        </RightColumn>
      </Flexbox>
      <Flexbox style={{ paddingBottom: '80px' }}>
        <Text>
          This is a Spotify playlist to accompany the amazing book. This is a Spotify playlist to accompany the super duper book. This is a Spotify playlist to accompany the book.
          </Text>
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