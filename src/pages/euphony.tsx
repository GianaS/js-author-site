import { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

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

const BOOK_DESCRIPTION: JSX.Element = <p css={text}><i>Euphony</i> is a new collection of poetry and prose written by Janelle Solviletti, uncovering those &lsquo;sweet sounds&rsquo; that seemingly exist with us perpetually. If only life had a soundtrack...what would ours sound like?</p>
const PLAYLIST_DESCRIPTION: JSX.Element = <p css={text}>Each poetic confession in <i>Euphony</i> dives headfirst into the intimate and secretive relationship we share with music, art, and those words that never leave us. Escape in the complexities and intensities of the deep emotions that divide dreamscapes from what is in front of our own eyes.</p>
const META_DESCRIPTION = 'Euphony is a new collection of poetry and prose written by Janelle Solviletti, uncovering those sweet sounds that seemingly exist with us perpetually. If only life had a soundtrack...what would ours sound like? Each poetic confession in Euphony dives headfirst into the intimate and secretive relationship we share with music, art, and those words that never leave us. Escape in the complexities and intensities of the deep emotions that divide dreamscapes from what is in front of our own eyes.'

const Euphony = ({ data }: { data: unknown }): JSX.Element => {
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
                title='Euphony | Janelle Solviletti'
                description={META_DESCRIPTION}
            />
            <GatsbyImage
                image={data.getFlowerPhoto.childImageSharp.gatsbyImageData}
                aria-hidden
                alt=''
                css={styledBackgroundImage}
            />
            <h1 css={title}>Euphony</h1>
            <div css={section}>
                <GatsbyImage
                    image={data.getCoverPhoto.childImageSharp.gatsbyImageData}
                    alt='euphony book cover'
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
                    src='https://open.spotify.com/embed/playlist/5k03hLTXJm0xxWBjIR1vHg?utm_source=generator'
                    width='300'
                    height='380'
                    frameBorder='0'
                    allow='encrypted-media'
                />
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