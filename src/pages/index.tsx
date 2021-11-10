import { Fragment } from 'react'
import { css } from '@emotion/react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Seo from '../components/Seo'
import { fonts, colors } from '../shared-styles/styles'
import { Button } from '../shared-components'
import { CAMEO_AMAZON_LINK } from '../utilities'

const section = css`
    display: flex;
    padding-bottom: 60px;

    :last-of-type {
        padding-bottom: 70px;
    }
`

const latestReleasesSection = css`
    ${section};
    justify-content: space-between;
`

const title = css`
    font-family: ${fonts.montserrat};
    font-weight: 400;
    margin-bottom: 22px;
`

const textWrapper = css`
    width: 100%;
    font-family: ${fonts.montserrat};
    font-size: 16px;
    padding-right: 40px;

    p {
        line-height: 28px;
    }
`

const styledImage = css`
    box-shadow: 2px 4px 15px ${colors.grey};
    width: 375px;
    height: 560px;
`

const bookSection = css`
    
`

// TODO need to update the meta description
const META_DESCRIPTION = 'Janelle Solviletti is a writer from Boston, Massachusetts. Euphony is her second poetry collection, following her debut poetry book, The Cameo, released in September 2020. Previously, she published works in The Horn Pond Review, The Feathertale Review and The Somerville Lyrical. She attended Marist College in Poughkeepsie, New York, and currently lives and works in Boston.'

const Home = ({ data }: { data: unknown }): JSX.Element => {
    const mostRecentBio = data.allContentfulBio.edges[0].node.bioText

    return (
        <Fragment>
            <Seo
                title='Home | Janelle Solviletti'
                description={META_DESCRIPTION}
            />
            <h1 css={title}>Latest Releases</h1>
            <div css={latestReleasesSection}>
                <div css={bookSection}>
                    <GatsbyImage
                        image={data.getEuphonyCover.childImageSharp.gatsbyImageData}
                        alt='euphony cover'
                        css={styledImage}
                    />
                    <Button label='Order now' href={CAMEO_AMAZON_LINK} />
                </div>
                <div>
                    <GatsbyImage
                        image={data.getCameoCover.childImageSharp.gatsbyImageData}
                        alt='the cameo cover'
                        css={styledImage}
                    />
                </div>
            </div>
            <h1 css={title}>About Janelle Solviletti</h1>
            <div css={section}>
                <span css={textWrapper}>{renderRichText(mostRecentBio)}</span>
                {/* <GatsbyImage
                    image={data.getHeadshot.childImageSharp.gatsbyImageData}
                    alt='janelle self portrait'
                    css={css`${styledImage}; width: 575px;`}
                /> */}
            </div>
        </Fragment>
    )
}

export const getHomeData = graphql`
  query getHomeData {
        getCameoCover: file(relativePath: { eq: "cameo-cover.png" }) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    layout: CONSTRAINED
                )
            }
        }
        getEuphonyCover: file(relativePath: { eq: "euphony-cover.png" }) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    layout: CONSTRAINED
                )
            }
        }
        getHeadshot: file(relativePath: { eq: "self-portrait-bw.jpeg" }) {
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

export default Home