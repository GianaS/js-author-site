import { Fragment } from 'react'
import { css } from '@emotion/react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Seo from '../components/Seo'
import { fonts } from '../shared-styles/styles'

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

const title = css`
  font-family: ${fonts.montserrat};
  font-weight: 400;
  padding-bottom: 20px;
`

const yearSection = css`
  font-family: ${fonts.montserrat};

  h2 {
    font-weight: 400;
    font-size: 22px;
    padding-bottom: 8px;
  }
`

const poemSection = css`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  padding-bottom: 14px;
`

const styledPoem = css`
  display: inline-block;
  margin-bottom: 18px;
`

const caption = css`
  font-family: ${fonts.montserrat};
  padding: 6px 0 35px 0;
`

const styledImage = css`
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
        <span css={styledPoem} key={id}>
            {
                title === 'The Cameo'
                &&
                <GatsbyImage
                    image={data.getRosePhoto.childImageSharp.gatsbyImageData}
                    alt='janelle self portrait'
                    css={styledImage}
                />
            }
            {titleElement}
            {publication}
        </span>
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

const META_DESCRIPTION = 'View selection of published poems by Janelle Solviletti.'

const Poem = ({ data }: { data: unknown }): JSX.Element => {
    const { edges: poemsFromApi } = data.allContentfulPoem
    const formattedPoems = createPoemObject(poemsFromApi)

    return (
        <Fragment>
            <Seo
                title='Poems | Janelle Solviletti'
                description={META_DESCRIPTION}
            />
            <h1 css={title}>Selected Poems</h1>
            {Object.keys(formattedPoems).reverse().map((year, index) => {
                return (
                    <div css={yearSection} key={index}>
                        <h2>{year}</h2>
                        <div css={poemSection}>
                            {formattedPoems[year].map((poem) => buildPoemSection({ ...poem, data }))}
                        </div>
                    </div>
                )
            })}
            <GatsbyImage
                image={data.getPoemReadingPhoto.childImageSharp.gatsbyImageData}
                alt='janelle reading a poem'
                style={{ marginTop: '40px' }}
            />
            <p css={caption}>Janelle reading <i>Penultimate</i> at Marist College.</p>
        </Fragment>
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