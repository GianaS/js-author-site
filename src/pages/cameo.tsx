import { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'

import Seo from '../components/Seo'
import { useMedia, CAMEO_AMAZON_LINK } from '../utilities'
import { Button } from '../shared-components'
import { 
    makePageWrapper,
    styledBackgroundImage,
    title,
    section,
    styledImage,
    text,
    textButtonWrapper
} from '../shared-styles/books'

const BOOK_DESCRIPTION: JSX.Element = <p css={text}>“I wish to disunite the postulation that love and time are one and the same.” <i>The Cameo</i> is a short collection of poetry and prose depicting the damage of two souls intertwining, as well as the even bolder proposition that romantic disillusion itself is a mirage. A metaphysical investigation into desire, disorder, and the natural world.</p>
const PLAYLIST_DESCRIPTION: JSX.Element = <p css={text}>Music transcends through time. Over the years, these songs were part of the making of <i>The Cameo</i>,  and whisper secrets in the margins. Before you turn the page, tune in to the place where it all began.</p>
const META_DESCRIPTION = 'The Cameo is a short collection of poetry and prose depicting the damage of two souls intertwining, as well as the even bolder proposition that romantic disillusion itself is a mirage. A metaphysical investigation into desire, disorder, and the natural world. Order The Cameo now!'

const Cameo = ({ data }: { data: unknown }): JSX.Element => {
    const navBreakpoint = typeof window !== 'undefined'
        ? useMedia('(max-width: 700px)')
        : undefined

    const [headerHeight, setHeaderHeight] = useState<string>('0px')

    useEffect(() => {
        if (typeof document !== 'undefined') {
            const headerElement = document.getElementById('header-wrapper')
            if (typeof window !== 'undefined' && headerElement) {
                setHeaderHeight(window.getComputedStyle(headerElement, null).getPropertyValue('height'))
            }
        }
    }, [])

    return (
        <div css={makePageWrapper(headerHeight)}>
            <Seo
                title='The Cameo | Janelle Solviletti'
                description={META_DESCRIPTION}
            />
            <GatsbyImage
                image={data.getRosePhoto.childImageSharp.gatsbyImageData}
                aria-hidden
                alt=''
                css={css`${styledBackgroundImage}; opacity: 50%;`}
            />
            <h1 css={title}>The Cameo</h1>
            <div css={section}>
                <GatsbyImage
                    image={data.getCoverPhoto.childImageSharp.gatsbyImageData}
                    alt='the cameo book cover'
                    css={styledImage}
                />
                <div css={textButtonWrapper}>
                    {!navBreakpoint ? BOOK_DESCRIPTION : null}
                    <Button label='Order now' href={CAMEO_AMAZON_LINK} />
                    {navBreakpoint ? BOOK_DESCRIPTION : null}
                </div>
            </div>
            <div css={section}>
                {PLAYLIST_DESCRIPTION}
                <iframe
                    src='https://open.spotify.com/embed/playlist/4zwUWpSsVgrRwAWObakMTw'
                    width='300'
                    height='380'
                    frameBorder='0'
                    allow='encrypted-media'
                />
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
  }
`

export default Cameo