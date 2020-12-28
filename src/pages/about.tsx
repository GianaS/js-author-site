import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Seo from '../components/Seo'
import { fonts } from '../styles/styles'

const PhotoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`

const TextWrapper = styled.span`
  width: 100%;
  font-family: ${fonts.montserrat};
  line-height: 1.7;
  font-size: 16px;
  padding-top: 15px;

  h1 {
    font-size: 16px;
    font-weight: inherit;
    font-family: ${fonts.montserrat};
    line-height: 1.7;
    display: inline-block;
    margin-bottom: 0;
  }
`

const ABOUT_TEXT: JSX.Element = <TextWrapper><h1>Janelle Solviletti</h1> is a twenty-five-year-old writer from the outskirts of Boston. She graduated from Marist College in Poughkeepsie, New York, with a Masters Degree in Marketing. <i>The Cameo</i> is her debut poetry book, which encapsulates the tensions between time and love and their competing entities. She believes that it is the visionary who can call a moment into existence without the help or hindrance of the hands of time. She hopes those who delve into her poetry will recollect moments and commemorate those relationships with others, the natural world, passions and past times; whatever it may be that was once taken for granted by time’s natural order.</TextWrapper>
const META_DESCRIPTION: string = 'Janelle Solviletti is a twenty-five-year-old writer from the outskirts of Boston. She graduated from Marist College in Poughkeepsie, New York, with a Masters Degree in Marketing. The Cameo is her debut poetry book, which encapsulates the tensions between time and love and their competing entities. She believes that it is the visionary who can call a moment into existence without the help or hindrance of the hands of time. She hopes those who delve into her poetry will recollect moments and commemorate those relationships with others, the natural world, passions and past times; whatever it may be that was once taken for granted by time’s natural order.'

const About = ({ data }): JSX.Element => {
  return (
    <PhotoTextWrapper>
      <Seo
        title='About Me | Janelle Solviletti'
        description={META_DESCRIPTION}
      />
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt='janelle self portrait'
      />
      {ABOUT_TEXT}
    </PhotoTextWrapper>
  )
}

export const getAboutPhoto = graphql`
  query getAboutPhoto {
    file(relativePath: { eq: "self-portrait-bw.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default About