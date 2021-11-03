import { css } from '@emotion/react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Seo from '../components/Seo'
import { fonts } from '../styles/styles'

const title = css`
  font-family: ${fonts.montserrat};
  font-weight: 400;
`

const photoTextWrapper = css`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`

const textWrapper = css`
  width: 100%;
  font-family: ${fonts.montserrat};
  line-height: 1.7;
  font-size: 16px;
`

const META_DESCRIPTION = 'Janelle Solviletti is a writer from Boston, Massachusetts. Euphony is her second poetry collection, following her debut poetry book, The Cameo, released in September 2020. Previously, she published works in The Horn Pond Review, The Feathertale Review and The Somerville Lyrical. She attended Marist College in Poughkeepsie, New York, and currently lives and works in Boston.'

const About = ({ data }: { data: unknown }): JSX.Element => {
    // TODO: check that nodes exist
    // was having issues with gatsby query failing if no entries existed
    // need to do this check on the poems page also
    const mostRecentBio = data.allContentfulBio.edges[0].node.bioText

    return (
        <div css={photoTextWrapper}>
            <Seo
                title='About | Janelle Solviletti'
                description={META_DESCRIPTION}
            />
            <GatsbyImage
                image={data.getAboutPhoto.childImageSharp.gatsbyImageData}
                alt='janelle self portrait'
            />
            <h1 css={title}>About Janelle Solviletti</h1>
            <span css={textWrapper}>{renderRichText(mostRecentBio)}</span>
        </div>
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