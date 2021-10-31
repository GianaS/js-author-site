import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Seo from '../components/Seo'
import { fonts } from '../styles/styles'

const Title = styled.h1`
  font-family: ${fonts.montserrat};
  font-weight: 400;
`

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
`

const META_DESCRIPTION: string = 'Janelle Solviletti is a twenty-five-year-old writer from the outskirts of Boston. She graduated from Marist College in Poughkeepsie, New York, with a Masters Degree in Marketing. The Cameo is her debut poetry book, which encapsulates the tensions between time and love and their competing entities. She believes that it is the visionary who can call a moment into existence without the help or hindrance of the hands of time. She hopes those who delve into her poetry will recollect moments and commemorate those relationships with others, the natural world, passions and past times; whatever it may be that was once taken for granted by time’s natural order.'

const About = ({ data }): JSX.Element => {
  // TODO: check that nodes exist
  // was having issues with gatsby query failing if no entries existed
  // need to do this check on the poems page also
  const mostRecentBio = data.allContentfulBio.edges[0].node.bioText

  return (
    <PhotoTextWrapper>
      <Seo
        title='About | Janelle Solviletti'
        description={META_DESCRIPTION}
      />
      <GatsbyImage
        image={data.getAboutPhoto.childImageSharp.gatsbyImageData}
        alt='janelle self portrait'
      />
      <Title>About Janelle Solviletti</Title>
      <TextWrapper>{renderRichText(mostRecentBio)}</TextWrapper>
    </PhotoTextWrapper>
  )
}

export const getAboutData = graphql`
  query getAboutData {
    getAboutPhoto: file(relativePath: { eq: "self-portrait-bw.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          layout: CONSTRAINED
        )
      }
    }
    allContentfulBio(sort: {fields: updatedAt, order: DESC}) {
      edges {
        node {
          bioText {
            raw
          }
        }
      }
    }
  }
`

export default About