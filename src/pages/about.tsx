import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import { fonts } from '../styles/styles'

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 240px 0 240px;
`

const TitleText = styled.h1`
  padding-bottom: 20px;
  font-family: ${fonts.yesevaOne}
`

const PhotoTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const TextWrapper = styled.div`
  width: 560px;
  font-family: ${fonts.montserrat};
  line-height: 1.7;

  span {
    font-family: ${fonts.zeyada};
    display: block;
    font-size: 50px;
    padding-bottom: 10px;
  }
`

const ABOUT_TEXT: JSX.Element = <TextWrapper><p><span>Janelle Solviletti</span>is a twenty-five-year-old writer from the outskirts of Boston. She graduated from Marist College in Poughkeepsie, New York, with a Masters Degree in Marketing. The Cameo is her debut poetry book, which encapsulates the tensions between time and love and their competing entities. She believes that it is the visionary who can call a moment into existence without the help or hindrance of the hands of time. She hopes those who delve into her poetry will recollect moments and commemorate those relationships with others, the natural world, passions and past times; whatever it may be that was once taken for granted by time’s natural order.</p></TextWrapper>

const About = (): JSX.Element => {
  return (
    <>
      <Header />
      <AboutWrapper>
        <TitleText>About Me</TitleText>
        <PhotoTextWrapper>
          <img
            src='../images/self-portrait-bw.jpeg'
            alt='janelle self portrait'
            width='600'
            height='400'
          />
          {ABOUT_TEXT}
        </PhotoTextWrapper>
      </AboutWrapper>
    </>
  )
}

export default About