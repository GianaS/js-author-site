import { Fragment } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'

import Seo from '../components/Seo'
// import { CAMEO_AMAZON_LINK } from '../utilities'
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

const META_DESCRIPTION = 'Learn more about Janelle Solviletti\'s debut book, The Cameo.  It is known for its lyrical desire to investigate time, disorder and the natural world.'
const CAMEO_DESCRIPTION = <Fragment><i>The Cameo</i> begins with an astonishing claim: &lsquo;I wish to disunite the postulation that love and time are one and the same.&rsquo; From there, it offers lyrical proof for this claim, through means wily &lsquo;urban revolt&rsquo; and &lsquo;manmade revelation,&rsquo; relational &lsquo;In sequence/it seems you are immemorial&rsquo; and sacred. Depicting with great pathos the damage of two souls intertwining, as well as the even bolder proposition that romantic disillusion itself is a mirage: &lsquo;I think I made you up.&rsquo; The metaphysical investigation into desire, disorder, and the natural world, invoke the declamation: &lsquo;I am nothing but my own end&rsquo; as well as the argument for the powers of being to prevail against the temporal forces that oppose it. Step inside, and &lsquo;luxuriate the moments&rsquo; with a new voice that proclaims, &lsquo;My lips are an index of sinners I’m not done speaking for.&rsquo;</Fragment>
const PLAYLIST_DESCRIPTION = <Fragment>Music transcends through time. Over the years, these songs were part of the making of <i>The Cameo</i>, and whisper secrets in the margins. Before you turn the page, tune in to the place where it all began.</Fragment>

const Cameo = ({ data }: { data: unknown }): JSX.Element => {
    const homeImageGridMap: CustomImage[] = [
        {
            imageData: data?.getOne?.childImageSharp?.gatsbyImageData,
            caption: 'A buried memory unearthing',
            altText: 'Hand flipping through The Cameo pages'
        },
        {
            imageData: data?.getTwo?.childImageSharp?.gatsbyImageData,
            caption: 'If I am not yours than whose?',
            altText: 'Janelle Solviletti reading The Cameo'
        },
        {
            imageData: data?.getThree?.childImageSharp?.gatsbyImageData,
            caption: 'Songs in sync at midnight',
            altText: 'The Cameo open next to flowers'
        },
        {
            imageData: data?.getFour?.childImageSharp?.gatsbyImageData,
            caption: 'This geography unfolds itself',
            altText: 'The Cameo next to a sunflower'
        }
    ]

    return (
        <div css={css`position: relative;`}>
            <Seo
                title='The Cameo | Janelle Solviletti'
                description={META_DESCRIPTION}
            />
            <div css={bodyWrapper}>
                <div css={makeBannerBlockGrid(colors.mintGreen)}>
                    <div css={bookImageContainer}>
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
                    <div css={reverseReverse}>
                        <h1 css={sectionTitle}>The Cameo</h1>
                        <p css={paragraph}>{CAMEO_DESCRIPTION}</p>
                        {/* <Button label='Buy now' href={CAMEO_AMAZON_LINK} /> */}
                    </div>
                </div>
                <div css={carousel}>
                    <Carousel
                        childArray={homeImageGridMap}
                        isCard={true}
                    />
                </div>
                <div css={makeBannerBlockGrid(colors.mintGreen)}>
                    <div css={playlistTextCard}>
                        <h2 css={inspirationTitle}>Inspiration</h2>
                        <p css={paragraph}>{PLAYLIST_DESCRIPTION}</p>
                    </div>
                    <div css={playlistContainer}>
                        <div css={playlist}>
                            <iframe
                                src='https://open.spotify.com/embed/playlist/4zwUWpSsVgrRwAWObakMTw'
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

export const getCameoData = graphql`
  query getCameoData {
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
    getOne: file(relativePath: { eq: "cameo-images/One.JPG" }) {
        childImageSharp {
            gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
            )
        }
    }
    getTwo: file(relativePath: { eq: "cameo-images/Two.JPG" }) {
        childImageSharp {
            gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
            )
        }
    }
    getThree: file(relativePath: { eq: "cameo-images/Three.JPG" }) {
        childImageSharp {
            gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
            )
        }
    }
    getFour: file(relativePath: { eq: "cameo-images/Four.JPG" }) {
        childImageSharp {
            gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
            )
        }
    }
  }
`

export default Cameo