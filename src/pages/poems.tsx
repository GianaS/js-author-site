import React from 'react'
import styled from 'styled-components'

import Seo from '../components/Seo'
import { fonts } from '../styles/styles'

type Poem = {
  poemTitle: string
  publication: string
  link?: string
}

type SelectedPoems = {
  [_: string]: Poem[]
}

const SELECTED_POEMS: SelectedPoems = {
  '2020': [
    {
      poemTitle: 'The Cameo',
      publication: 'coming soon'
    },
    {
      poemTitle: 'Twin Signs, Runner',
      publication: 'Truck Stop Trinkets',
      link: 'https://truckstoptrinkets.wixsite.com/mysite/poetry'
    }
  ],
  '2018': [
    {
      poemTitle: 'Manuscript',
      publication: 'The Feathertale Review',
      link: 'https://feathertale.com/product/issue-20/'
    }
  ],
  '2017': [
    {
      poemTitle: 'Dear Watertown',
      publication: 'Marist College Mosaic Literary Journal, Spring Edition'
    },
    {
      poemTitle: 'Fernweh, Penultimate, Sur',
      publication: 'Marist College OED Project'
    }
  ],
  '2016': [
    {
      poemTitle: 'The Escapist Journal',
      publication: 'Special Project',
      link: 'https://www.instagram.com/escapistjournal/'
    },
    {
      poemTitle: 'Midnight Sand Dollar',
      publication: 'The Somerville Times',
      link: 'https://www.thesomervilletimes.com/archives/65527'
    }
  ]
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
  justify-content: space-between;

  span, a {
    font-size: 18px;
    padding-bottom: 14px;
  }
`

const Caption = styled.p`
  font-family: ${fonts.montserrat};
  padding: 6px 0 35px 0;
`

const buildPoemSection = ({ poemTitle, publication, link }: Poem) => {
  const poemAnchor: JSX.Element = (
    <span key={poemTitle}>
      <a href={link}><i>{poemTitle}, </i></a>
      {publication}
    </span>
  )

  const poemParagraph: JSX.Element = (
    <span key={poemTitle}>
      <i>{poemTitle}, </i>
      {publication}
    </span>
  )

  return link ? poemAnchor : poemParagraph
}

const Poem = (): JSX.Element => {
  const allPoems = Object.keys(SELECTED_POEMS).reverse()
  return (
    <>
      <Seo title='Poems | Janelle Solviletti' />
      <Title>Selected Poems</Title>
      <div>
        {allPoems.map(year => {
          return (
            <YearSection key={year}>
              <h2>{year}</h2>
              <PoemSection>
                {SELECTED_POEMS[year].map((poem) => buildPoemSection(poem))}
              </PoemSection>
            </YearSection>
          )
        })}
      </div>
      <img
        src='../images/poem-reading.jpg'
        alt='janelle reading a poem'
        width='100%'
        style={{paddingTop: '20px'}}
      />
      <Caption>Janelle reading <i>Penultimate</i> at Marist College.</Caption>
    </>
  )
}

export default Poem