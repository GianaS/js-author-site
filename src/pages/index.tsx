import { Fragment } from 'react'
import { css } from '@emotion/react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Seo from '../components/Seo'
import { Button } from '../shared-components'
import { EUPHONY_AMAZON_LINK, CAMEO_AMAZON_LINK } from '../utilities'
import {
    bodyWrapper,
    makeBannerBlockGrid,
    colors,
    sectionTitle,
    paragraph,
    bookImageContainer,
    bookFlower,
    bookCover,
    reverseReverse
} from '../styles/sharedStyles'
import {
    chip,
    learnMoreLink,
    publishedWorkLink,
    authorBlockSection
} from '../styles/home'

const META_DESCRIPTION = 'Janelle Solviletti is a writer from Boston, Massachusetts. Euphony is her second poetry collection, following her debut poetry book, The Cameo, released in September 2020. Previously, she published works in The Horn Pond Review, The Feathertale Review and The Somerville Lyrical. She attended Marist College in Poughkeepsie, New York, and currently lives and works in Boston.'
const EUPHONY_DESCRIPTION = <Fragment><i>Euphony</i> is a new collection of poetry and prose written by Janelle Solviletti, uncovering those ‘sweet sounds’ that seemingly exist with us perpetually. If only life had a soundtrack….what would ours sound like? Each poetic confession in Euphony dives headfirst into the intimate and secretive relationship we share with music, art, and those words that never leave us.</Fragment>
const CAMEO_DESCRIPTION = <Fragment><i>The Cameo</i> begins with an astonishing claim: &lsquo;I wish to disunite the postulation that love and time are one and the same.&rsquo; From there, it offers lyrical proof for this claim, through means wily &lsquo;urban revolt&rsquo; and &lsquo;manmade revelation,&rsquo; relational &lsquo;In sequence/it seems you are immemorial&rsquo; and sacred. Depicting with great pathos the damage of two souls intertwining, as well as the even bolder proposition that romantic disillusion itself is a mirage: &lsquo;I think I made you up.&rsquo;</Fragment>
const AUTHOR_DESCRIPTION = <Fragment>Janelle Solviletti is an author from Boston, Massachusetts. She uses storytelling and her own experiences in life to capture, through poetry and prose, those emotions, and moments, that cannot be simply defined or dismissed in time. Her debut book, <i>The Cameo</i>, was released in September 2020, and is known for its lyrical desire to investigate time, disorder and the natural world. In her second book, <i>Euphony</i>, released in November 2021, music is confessional and art is a dreamscape worth diving into. If only life had a soundtrack… Previously, her works have been published in The Horn Pond Review, The Feathertale Review and The Somerville Lyrical. She attended Marist College in Poughkeepsie, New York, and currently lives and works in Boston.</Fragment>

const Home = ({ data }: { data: unknown }): JSX.Element => {
    return (
        <div css={css`position: relative;`}>
            <Seo
                title='Home | Janelle Solviletti'
                description={META_DESCRIPTION}
            />
            <div css={bodyWrapper}>
                <div css={makeBannerBlockGrid(colors.offWhite)}>
                    <div>image grid goes here</div>
                    <div css={reverseReverse}>
                        <div css={chip}>OUT NOW!</div>
                        <h1 css={sectionTitle}>Euphony</h1>
                        <p css={paragraph}>{EUPHONY_DESCRIPTION}</p>
                        <div css={css`display: flex; align-items: center;`}>
                            <Button label='Buy now' href={EUPHONY_AMAZON_LINK} />
                            <Link css={learnMoreLink} to='/euphony' >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
                <div css={makeBannerBlockGrid(colors.mintGreen)}>
                    <div>
                        <h1 css={sectionTitle}>The Cameo</h1>
                        <p css={paragraph}>{CAMEO_DESCRIPTION}</p>
                        <div css={css`display: flex; align-items: center;`}>
                            <Button label='Buy now' href={CAMEO_AMAZON_LINK} />
                            <Link css={learnMoreLink} to='/cameo' >
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div css={css`${bookImageContainer}; ${reverseReverse}`}>
                        <div css={bookFlower}>
                            <GatsbyImage
                                image={data?.getRosePhoto?.childImageSharp?.gatsbyImageData}
                                aria-hidden
                                alt='rose'
                                css={css`max-width: 615px;`}
                            />
                        </div>
                        <GatsbyImage
                            image={data?.getCoverPhoto?.childImageSharp?.gatsbyImageData}
                            alt='the cameo book cover'
                            css={bookCover}
                        />
                    </div>
                </div>
                <div css={authorBlockSection}>
                    <h1 css={css`${sectionTitle}; font-size: 48px;`}>About the Author</h1>
                    <p css={paragraph}>{AUTHOR_DESCRIPTION}</p>
                    <Link css={publishedWorkLink} to='/poems' >
                        View her published work
                    </Link>
                    <GatsbyImage
                        image={data?.getHeadshot?.childImageSharp?.gatsbyImageData}
                        alt='headshot of janelle'
                        css={css`max-width: 615px;`}
                    />
                </div>
            </div>
        </div>
    )
}

export const getHomeData = graphql`
    query getHomeData {
        getCoverPhoto: file(relativePath: { eq: "cameo-cover.png" }) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    layout: CONSTRAINED
                )
            }
        }
        getRosePhoto: file(relativePath: { eq: "rose-transparent-original.png" }) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: BLURRED
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
    }
`

export default Home