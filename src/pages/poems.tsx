import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { GetPoemsDataQuery, ContentfulPoemEdge } from '../types/graphql.types'

import Seo from '../components/Seo'
import { fonts } from '../styles/styles'

type Poem = {
  id: string
  title: string
  publication: string
  link?: string
  data?: unknown
}

type SelectedPoems = {
  [_: string]: Poem[]
}

const Title = styled.h1`
  font-family: ${fonts.montserrat};
  font-weight: 400;
  padding-bottom: 20px;
`

const YearSection = styled.div`
  font-family: ${fonts.montserrat};

  h2 {
    font-weight: 400;
    font-size: 22px;
    padding-bottom: 8px;
  }
`

const PoemSection = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  padding-bottom: 14px;
`

const StyledPoem = styled.span`
  display: inline-block;
  margin-bottom: 18px;
`

const Caption = styled.p`
  font-family: ${fonts.montserrat};
  padding: 6px 0 35px 0;
`

const StyledImage = styled(GatsbyImage)`
  height: 35px;
  width: 35px;
  top: -6px;
  display: inline-block;
`

const buildPoemSection = ({ id, title, publication, link, data }: Poem) => {
  const titleElement: JSX.Element = link
    ? <a href={link}><i>{title}, </i></a>
    : <i>{title}, </i>

  return (
    <StyledPoem key={id}>
      {
        title === 'The Cameo'
        &&
        <StyledImage
          image={data.getRosePhoto.childImageSharp.gatsbyImageData}
          alt='janelle self portrait'
        />
      }
      {titleElement}
      {publication}
    </StyledPoem>
  )
}

const createPoemObject = (poemsFromApi: ContentfulPoemEdge): SelectedPoems => {
  return poemsFromApi.reduce((acc, poemObject) => {
    const { node } = poemObject
    const { year, ...poemWithoutYear } = node

    if (acc[year] === undefined) {
      return { ...acc, [year]: [poemWithoutYear] }
    } else {
      acc[year].push(poemWithoutYear)
      return acc
    }
  }, {})
}

const META_DESCRIPTION = 'View selection of published poems by Janelle Solviletti.'

const Poem = ({ data }: { data: GetPoemsDataQuery }): JSX.Element => {
  const { edges: poemsFromApi } = data.allContentfulPoem
  const formattedPoems = createPoemObject(poemsFromApi)

  return (
    <>
      <Seo
        title='Poems | Janelle Solviletti'
        description={META_DESCRIPTION}
      />
      <Title>Selected Poems</Title>
      {Object.keys(formattedPoems).reverse().map((year, index) => {
        return (
          <YearSection key={index}>
            <h2>{year}</h2>
            <PoemSection>
              {formattedPoems[year].map((poem) => buildPoemSection({ ...poem, data }))}
            </PoemSection>
          </YearSection>
        )
      })}
      <GatsbyImage
        image={data.getPoemReadingPhoto?.childImageSharp?.gatsbyImageData}
        alt='janelle reading a poem'
        style={{ marginTop: '40px' }}
      />
      <Caption>Janelle reading <i>Penultimate</i> at Marist College.</Caption>
    </>
  )
}

export const getPoemsData = graphql`
  query getPoemsData {
    getPoemReadingPhoto: file(relativePath: { eq: "poem-reading.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          layout: CONSTRAINED
        )
      }
    }
    getRosePhoto: file(relativePath: { eq: "rose.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
        )
      }
    }
    allContentfulPoem(sort: {fields: updatedAt, order: DESC}) {
      edges {
        node {
          link
          publication
          title
          year
          id
        }
      }
    }
  }
`

export default Poem