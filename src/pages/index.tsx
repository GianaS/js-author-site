import { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Seo from '../components/Seo'
import { Modal, Carousel, CustomImage } from '../shared-components'
import {
    MOBILE_BREAKPOINT,
    useMedia
} from '../utilities'
import {
    bodyWrapper,
    makeBannerBlockGrid,
    colors,
    sectionTitle,
    paragraph,
    reverseReverse
} from '../styles/sharedStyles'
import {
    publishedWorkLink,
    gridOfImages,
    imageCell,
    gridButton
} from '../styles/home'

const META_DESCRIPTION = 'Learn more about Janelle Solviletti, an author from Boston, Massachusetts. Her debut book, The Cameo, is known for its lyrical desire to investigate time, disorder and the natural world. In her second book, Euphony, music is confessional and art is a dreamscape worth diving into.  Previously, her works have been published in The Horn Pond Review, The Feathertale Review and The Somerville Lyrical. She attended Marist College in Poughkeepsie, New York, and currently lives and works in Boston.'
const AUTHOR_DESCRIPTION = <Fragment>Janelle Solviletti is an author from Boston, Massachusetts. She uses storytelling and her own experiences in life to capture, through poetry and prose, those emotions, and moments, that cannot be simply defined or dismissed in time. Her debut book, <i>The Cameo</i>, was released in September 2020, and is known for its lyrical desire to investigate time, disorder and the natural world. In her second book, <i>Euphony</i>, released in November 2021, music is confessional and art is a dreamscape worth diving into. If only life had a soundtrack… Previously, her works have been published in The Horn Pond Review, The Feathertale Review and The Somerville Lyrical. She attended Marist College in Poughkeepsie, New York, and currently lives and works in Boston.</Fragment>

const Home = ({ data }: { data: unknown }): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
    const isDesktop = useMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`)

    const homeImageGridMap: CustomImage[] = [
        {
            imageData: data?.getOne?.childImageSharp?.gatsbyImageData,
            caption: 'In hindsight, all things hang in the air if you are alive to it',
            altText: 'empty street with autumn foliage'
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
            caption: 'With nothing but a melody to hold onto',
            altText: 'bench with leaves and poetry book'
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
                        <Carousel
                            childArray={homeImageGridMap}
                            hasMultipleViews={false}
                            onClick={() => (index) => {
                                setIsModalOpen(true)
                                setSelectedImageIndex(index)
                            }}
                        />
                    </div>
                    <div css={reverseReverse}>
                        <h1 css={css`${sectionTitle}; font-size: 48px;`}>About the Author</h1>
                        <p css={paragraph}>{AUTHOR_DESCRIPTION}</p>
                        <Link css={publishedWorkLink} to='/poems' >
                            View her published work
                        </Link>
                    </div>
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