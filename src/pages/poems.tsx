import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Seo from '../components/Seo'
import { fonts } from '../styles/styles'
import image from '../assets/images/poem-reading.jpg'
import roseImage from '../assets/images/rose.png'

type Poem = {
  id: string
  title: string
  publication: string
  link?: string
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
  padding-bottom: 20px;
  font-family: ${fonts.montserrat};

  h2 {
    font-weight: 400;
    font-size: 22px;
  }
`

const PoemSection = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
    padding-bottom: 14px;

  p {
    display: inline-block;
  }

  img {
    height: 35px;
    top: 11px;
    display: inline-block;
    position: relative;
  }
`

const Caption = styled.p`
  font-family: ${fonts.montserrat};
  padding: 6px 0 35px 0;
`

const buildPoemSection = ({ id, title, publication, link }: Poem) => {
  const titleElement: JSX.Element = link
    ? <a href={link}><i>{title}, </i></a>
    : <i>{title}, </i>

  return (
    <p key={id}>
      {title === 'The Cameo' && <img src={roseImage} alt='rose icon' />}
      {titleElement}
      {publication}
    </p>
  )
}

const createPoemObject = (poemsFromApi): SelectedPoems => {
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

const META_DESCRIPTION: string = 'View selection of published poems by Janelle Solviletti.'

const Poem = ({ data }): JSX.Element => {
  const { edges: poemsFromApi } = data.allContentfulPoem
  const formattedPoems = createPoemObject(poemsFromApi)

  return (
    <>
      <Seo
        title='Poems | Janelle Solviletti'
        description={META_DESCRIPTION}
      />
      <Title>Selected Poems</Title>
      <div>
        {Object.keys(formattedPoems).reverse().map(year => {
          return (
            <YearSection key={formattedPoems.id}>
              <h2>{year}</h2>
              <PoemSection>
                {formattedPoems[year].map((poem) => buildPoemSection(poem))}
              </PoemSection>
            </YearSection>
          )
        })}
      </div>
      <img
        src={image}
        alt='janelle reading a poem'
        width='100%'
        style={{ paddingTop: '20px' }}
      />
      <Caption>Janelle reading <i>Penultimate</i> at Marist College.</Caption>
    </>
  )
}

export const getAllPoems = graphql`
  query MyQuery {
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