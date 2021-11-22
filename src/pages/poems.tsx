import { graphql } from 'gatsby'
import { css } from '@emotion/react'
import { GatsbyImage } from 'gatsby-plugin-image'

import Seo from '../components/Seo'
import { bodyWrapper, grid } from '../styles/sharedStyles'
import {
    cardTitle,
    yearHeading,
    formattedPoems,
    poem,
    caption,
    greenBackgroundSection,
    poemCard,
    imageSection,
    euphonyIcon,
    cameoIcon
} from '../styles/poems'

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

const buildPoemSection = ({ id, title, publication, link, data }: Poem) => {
    const titleElement: JSX.Element = link
        ? <a href={link}><i>{title}, </i></a>
        : <i>{title}, </i>

    let Icon = null

    if (title === 'The Cameo') {
        Icon = (
            <GatsbyImage
                image={data.getRosePhoto.childImageSharp.gatsbyImageData}
                alt='cameo icon'
                css={cameoIcon}
            />
        )
    } else if (title === 'Euphony') {
        Icon = (
            <GatsbyImage
                image={data.getEuphonyIcon.childImageSharp.gatsbyImageData}
                alt='euphony icon'
                css={euphonyIcon}
            />
        )
    }

    return (
        <span css={poem} key={id}>
            {Icon}
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

const META_DESCRIPTION = 'View a selection of published poems by author Janelle Solviletti.'

const Poem = ({ data }: { data: unknown }): JSX.Element => {
    const { edges: poemsFromApi } = data.allContentfulPoem
    const poemObject = createPoemObject(poemsFromApi)

    return (
        <div css={css`position: relative;`}>
            <Seo
                title='Poems | Janelle Solviletti'
                description={META_DESCRIPTION}
            />
            <div css={greenBackgroundSection} />
            <div css={css`${bodyWrapper}; padding: 65px 0;`}>
                <div css={grid}>
                    <div css={poemCard}>
                        <h1 css={cardTitle}>Published Work</h1>
                        {Object.keys(poemObject).reverse().map((year, index) => {
                            return (
                                <div key={index}>
                                    <h2 css={yearHeading}>{year}</h2>
                                    <div css={formattedPoems}>
                                        {poemObject[year].map((poem) => buildPoemSection({ ...poem, data }))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div css={imageSection}>
                        <GatsbyImage
                            image={data.getPoemReadingPhoto.childImageSharp.gatsbyImageData}
                            alt='janelle reading a poem'
                        />
                        <p css={caption}>Janelle reading <i>Penultimate</i> at Marist College.</p>
                    </div>
                </div>
            </div>
        </div>
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
    getEuphonyIcon: file(relativePath: { eq: "euphony-flower.png" }) {
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