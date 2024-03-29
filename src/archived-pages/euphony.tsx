import { Fragment } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'

import Seo from '../components/Seo'
// import { EUPHONY_AMAZON_LINK } from '../utilities'
import { Button, Carousel, CustomImage } from '../shared-components'
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
    playlist,
    playlistContainer,
    playlistTextCard,
    inspirationTitle,
    carousel
} from '../styles/books'

const META_DESCRIPTION = 'Learn more about Janelle Solviletti\'s second book, Euphony, where music is confessional and art is a dreamscape worth diving into.'
const EUPHONY_DESCRIPTION = <Fragment>The rendition goes on and on…time again, going out of your way to sit with the sound. I resist wind and count half-moons to pass time, walk backwards to survive… You’ll say, we all fake symphonies. And so, off the record, I’ll ask, should I be louder or silent until we are enough? Euphony is a new collection of poetry and prose written by Janelle Solviletti, uncovering those &lsquo;sweet sounds&rsquo; that seemingly exist with us perpetually. If only life had a soundtrack….what would ours sound like? Each poetic confession in <i>Euphony</i> dives headfirst into the intimate and secretive relationship we share with music, art, and those words that never leave us.</Fragment>
const PLAYLIST_DESCRIPTION = <Fragment>The melodies that are cast through <i>Euphony</i> start here. This is the sound that carries through each season with relentless pursuit, finding its home in the ear of each listener to interpret. Memories defined. Time memorialized. Music is by definition a form of harmony and emotional expression.</Fragment>

const Euphony = ({ data }: { data: unknown }): JSX.Element => {
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

    return (
        <div css={css`position: relative;`}>
            <Seo
                title='Euphony | Janelle Solviletti'
                description={META_DESCRIPTION}
            />
            <div css={bodyWrapper}>
                <div css={makeBannerBlockGrid(colors.offWhite)}>
                    <div css={bookImageContainer}>
                        <div css={css`${bookFlower}; opacity: .2;`}>
                            <GatsbyImage
                                image={data?.getFlowerPhoto?.childImageSharp?.gatsbyImageData}
                                aria-hidden
                                alt='flower'
                                css={css`max-width: 615px;`}
                            />
                        </div>
                        <GatsbyImage
                            image={data?.getCoverPhoto?.childImageSharp?.gatsbyImageData}
                            alt='euphony book cover'
                            css={bookCover}
                        />
                    </div>
                    <div css={reverseReverse}>
                        <h1 css={sectionTitle}>Euphony</h1>
                        <p css={paragraph}>{EUPHONY_DESCRIPTION}</p>
                        {/* <Button label='Buy now' href={EUPHONY_AMAZON_LINK} /> */}
                    </div>
                </div>
                <div css={carousel}>
                    <Carousel
                        childArray={homeImageGridMap}
                        isCard={true}
                    />
                </div>
                <div css={makeBannerBlockGrid(colors.offWhite)}>
                    <div css={playlistTextCard}>
                        <h2 css={inspirationTitle}>Inspiration</h2>
                        <p css={paragraph}>{PLAYLIST_DESCRIPTION}</p>
                    </div>
                    <div css={playlistContainer}>
                        <div css={playlist}>
                            <iframe
                                src='https://open.spotify.com/embed/playlist/5k03hLTXJm0xxWBjIR1vHg?utm_source=generator'
                                width='100%'
                                height='100%'
                                frameBorder='0'
                                allow='encrypted-media'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getEuphonyData = graphql`
  query getEuphonyData {
    getCoverPhoto: file(relativePath: { eq: "euphony-cover-final.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          layout: CONSTRAINED
        )
      }
    }
    getFlowerPhoto: file(relativePath: { eq: "euphony-flower.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
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

export default Euphony