import { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Seo from '../components/Seo'
import { Button, Modal, Carousel, CustomImage } from '../shared-components'
import {
    EUPHONY_AMAZON_LINK,
    CAMEO_AMAZON_LINK,
    MOBILE_BREAKPOINT,
    useMedia
} from '../utilities'
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
    authorBlockSection,
    gridOfImages,
    imageCell,
    gridButton
} from '../styles/home'

const META_DESCRIPTION = 'Learn more about Janelle Solviletti, an author from Boston, Massachusetts. Her debut book, The Cameo, is known for its lyrical desire to investigate time, disorder and the natural world. In her second book, Euphony, music is confessional and art is a dreamscape worth diving into.'
const EUPHONY_DESCRIPTION = <Fragment><i>Euphony</i> is a new collection of poetry and prose written by Janelle Solviletti, uncovering those &lsquo;sweet sounds&rsquo; that seemingly exist with us perpetually. If only life had a soundtrack….what would ours sound like? Each poetic confession in Euphony dives headfirst into the intimate and secretive relationship we share with music, art, and those words that never leave us.</Fragment>
const CAMEO_DESCRIPTION = <Fragment><i>The Cameo</i> begins with an astonishing claim: &lsquo;I wish to disunite the postulation that love and time are one and the same.&rsquo; From there, it offers lyrical proof for this claim, through means wily &lsquo;urban revolt&rsquo; and &lsquo;manmade revelation,&rsquo; relational &lsquo;In sequence/it seems you are immemorial&rsquo; and sacred. Depicting with great pathos the damage of two souls intertwining, as well as the even bolder proposition that romantic disillusion itself is a mirage: &lsquo;I think I made you up.&rsquo;</Fragment>
const AUTHOR_DESCRIPTION = <Fragment>Janelle Solviletti is an author from Boston, Massachusetts. She uses storytelling and her own experiences in life to capture, through poetry and prose, those emotions, and moments, that cannot be simply defined or dismissed in time. Her debut book, <i>The Cameo</i>, was released in September 2020, and is known for its lyrical desire to investigate time, disorder and the natural world. In her second book, <i>Euphony</i>, released in November 2021, music is confessional and art is a dreamscape worth diving into. If only life had a soundtrack… Previously, her works have been published in The Horn Pond Review, The Feathertale Review and The Somerville Lyrical. She attended Marist College in Poughkeepsie, New York, and currently lives and works in Boston.</Fragment>

const Home = ({ data }: { data: unknown }): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
    const isDesktop = useMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`)

    const homeImageGridMap: CustomImage[] = [
        {
            imageData: data?.getOne?.childImageSharp?.gatsbyImageData,
            caption: 'With nothing but a melody to hold onto',
            altText: 'bench with leaves and poetry book'
        },
        {
            imageData: data?.getTwo?.childImageSharp?.gatsbyImageData,
            caption: 'Now I pass through your neighborhood cloaked',
            altText: 'janelle solviletti walking down the street'
        },
        {
            imageData: data?.getThree?.childImageSharp?.gatsbyImageData,
            caption: 'Settlers in the garden, waiting for the knock',
            altText: 'stone stairs on an autumn day'
        },
        {
            imageData: data?.getFour?.childImageSharp?.gatsbyImageData,
            caption: 'You and I, at the mercy of a breeze, find the axis in conversation',
            altText: 'poetry book in a bush'
        },
        {
            imageData: data?.getFive?.childImageSharp?.gatsbyImageData,
            caption: 'In hindsight, all things hang in the air if you are alive to it',
            altText: 'emptry street with autumn foliage'
        },
        {
            imageData: data?.getSix?.childImageSharp?.gatsbyImageData,
            caption: 'We’re all looking at the same scene, makeshift in the shadows',
            altText: 'janelle solviletti standin near lake'
        },
        {
            imageData: data?.getSeven?.childImageSharp?.gatsbyImageData,
            caption: 'Nothing but a clear cost and you/I at its end',
            altText: 'lake with fall foliage'
        },
        {
            imageData: data?.getEight?.childImageSharp?.gatsbyImageData,
            caption: 'It was that symphonic poem that set us free',
            altText: 'janelle solviletti walking down street'
        },
        {
            imageData: data?.getNine?.childImageSharp?.gatsbyImageData,
            caption: 'In the off season, our tongues frost over like an oath to autumn',
            altText: 'two trees in autumn'
        },
        {
            imageData: data?.getTen?.childImageSharp?.gatsbyImageData,
            caption: 'On pause between plots',
            altText: 'empty tables and chairs next to fall foliage'
        },
        {
            imageData: data?.getEleven?.childImageSharp?.gatsbyImageData,
            caption: 'Eventually, that little world has your wits',
            altText: 'euphony poetry book in leaves'
        },
        {
            imageData: data?.getTwelve?.childImageSharp?.gatsbyImageData,
            caption: 'Euphony is in the ear of the listener',
            altText: 'janelle solviletti holding two copies of euphony poetry book'
        }
    ]

    const ImageGrid = (
        <div css={gridOfImages}>
            {homeImageGridMap.map((item, index) =>
                <div
                    role='button'
                    tabIndex={0}
                    key={item.altText}
                    css={gridButton}
                    onClick={() => {
                        setIsModalOpen(true)
                        setSelectedImageIndex(index)
                    }}>
                    <GatsbyImage
                        image={homeImageGridMap[index].imageData}
                        alt={homeImageGridMap[index].altText}
                        css={imageCell}
                    />
                </div>
            )}
        </div>
    )

    useEffect(() => {
        if (!isModalOpen) {
            setSelectedImageIndex(null)
        }
        if (!isDesktop) {
            setIsModalOpen(false)
            setSelectedImageIndex(null)
        }
    }, [isModalOpen, isDesktop])

    return (
        <div css={css`position: relative;`}>
            <Seo
                title='Home | Janelle Solviletti'
                description={META_DESCRIPTION}
            />
            {
                isModalOpen
                && selectedImageIndex !== null
                && <Modal
                    setIsModalOpen={setIsModalOpen}
                    imageData={homeImageGridMap[selectedImageIndex].imageData}
                    caption={homeImageGridMap[selectedImageIndex].caption}
                    altText={homeImageGridMap[selectedImageIndex].altText}
                />
            }
            <div css={bodyWrapper}>
                <div css={makeBannerBlockGrid(colors.offWhite)}>
                    <div>
                        {ImageGrid}
                        <Carousel childArray={homeImageGridMap} hasMultipleViews={false} />
                    </div>
                    <div css={reverseReverse}>
                        <div css={chip}>OUT SOON!</div>
                        <h1 css={sectionTitle}>Euphony</h1>
                        <p css={paragraph}>{EUPHONY_DESCRIPTION}</p>
                        <div css={css`display: flex; align-items: center;`}>
                            {/* <Button label='Buy now' href={EUPHONY_AMAZON_LINK} /> */}
                            <Button label='Available Nov 24' href={EUPHONY_AMAZON_LINK} disabled />
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
                        css={css`max-width: 550px;`}
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
        getHeadshot: file(relativePath: { eq: "taylor-headshot.JPG" }) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    layout: CONSTRAINED
                )
            }
        }
        getOne: file(relativePath: { eq: "euphony-images/One.JPG" }) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: BLURRED
                )
            }
        }
        getTwo: file(relativePath: { eq: "euphony-images/Two.JPG" }) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    layout: CONSTRAINED
                )
            }
        }
        getThree: file(relativePath: { eq: "euphony-images/Three.JPG" }) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    layout: CONSTRAINED
                )
            }
        }
        getFour: file(relativePath: { eq: "euphony-images/Four.JPG" }) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    layout: CONSTRAINED
                )
            }
        }
        getFive: file(relativePath: { eq: "euphony-images/Five.JPG" }) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    layout: CONSTRAINED
                )
            }
        }
        getSix: file(relativePath: { eq: "euphony-images/Six.JPG" }) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    layout: CONSTRAINED
                )
            }
        }
        getSeven: file(relativePath: { eq: "euphony-images/Seven.JPG" }) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    layout: CONSTRAINED
                )
            }
        }
        getEight: file(relativePath: { eq: "euphony-images/Eight.JPG" }) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    layout: CONSTRAINED
                )
            }
        }
        getNine: file(relativePath: { eq: "euphony-images/Nine.JPG" }) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    layout: CONSTRAINED
                )
            }
        }
        getTen: file(relativePath: { eq: "euphony-images/Ten.JPG" }) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    layout: CONSTRAINED
                )
            }
        }
        getEleven: file(relativePath: { eq: "euphony-images/Eleven.JPG" }) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    layout: CONSTRAINED
                )
            }
        }
        getTwelve: file(relativePath: { eq: "euphony-images/Twelve.JPG" }) {
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