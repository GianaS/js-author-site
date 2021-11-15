import { Fragment } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'

import Seo from '../components/Seo'
import { EUPHONY_AMAZON_LINK } from '../utilities'
import { Button } from '../shared-components'
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
    inspirationTitle
} from '../styles/books'

const META_DESCRIPTION = 'Euphony is a new collection of poetry and prose written by Janelle Solviletti, uncovering those sweet sounds that seemingly exist with us perpetually. If only life had a soundtrack...what would ours sound like? Each poetic confession in Euphony dives headfirst into the intimate and secretive relationship we share with music, art, and those words that never leave us. Escape in the complexities and intensities of the deep emotions that divide dreamscapes from what is in front of our own eyes.'
const EUPHONY_DESCRIPTION = <Fragment>The rendition goes on and on…time again, going out of your way to sit with the sound. I resist wind and count half-moons to pass time, walk backwards to survive… You’ll say, we all fake symphonies. And so, off the record, I’ll ask, should I be louder or silent until we are enough? Euphony is a new collection of poetry and prose written by Janelle Solviletti, uncovering those &lsquo;sweet sounds&rsquo; that seemingly exist with us perpetually. If only life had a soundtrack….what would ours sound like? Each poetic confession in Euphony dives headfirst into the intimate and secretive relationship we share with music, art, and those words that never leave us.</Fragment>
const PLAYLIST_DESCRIPTION = <Fragment>The melodies that are cast through <i>Euphony</i> start here. This is the sound that carries through each season with relentless pursuit, finding its home in the ear of each listener to interpret. Memories defined. Time memorialized. Music is by definition a form of harmony and emotional expression.</Fragment>

const Euphony = ({ data }: { data: unknown }): JSX.Element => {
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
                        <Button label='Buy now' href={EUPHONY_AMAZON_LINK} />
                    </div>
                </div>
                <div css={makeBannerBlockGrid(colors.white)}>
                    <div>image viewing here</div>
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
    getCoverPhoto: file(relativePath: { eq: "euphony-cover.png" }) {
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
  }
`

export default Euphony