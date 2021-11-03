import { useEffect, useState } from 'react'
import { css, SerializedStyles } from '@emotion/react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Seo from '../components/Seo'
import { fonts, colors } from '../styles/styles'
import { useMedia } from '../utilities'

const makePageWrapper = (headerHeight: string): SerializedStyles => (
    css`
        height: calc(100vh - ${headerHeight});
        
        iframe {
            box-shadow: 2px 4px 15px ${colors.grey};
            margin-left: 40px;

            @media (max-width: 700px) {
                margin-left: 0;
            }
        }
    `
)

const styledBackgroundImage = css`
    position: fixed;
    z-index: -101;
`

const title = css`
    font-family: ${fonts.montserrat};
    font-weight: 400;
    padding-bottom: 20px;
`

const section = css`
    display: flex;
    padding-bottom: 80px;

    @media (max-width: 700px) {
        flex-direction: column;
        padding-bottom: 40px;
    }
`

const styledImage = css`
    box-shadow: 2px 4px 15px ${colors.grey};

    width: 296px;

    @media (max-width: 700px) {
        margin-bottom: 30px;
    }
`

const text = css`
    font-family: ${fonts.montserrat};
    line-height: 1.7;
    font-size: 18px;
    padding-bottom: 10px;
`

const textButtonWrapper = css`
    padding-left: 40px;
    flex: 1;

    @media (max-width: 700px) {
        padding-left: 0;
    }
`

const buttonWrapper = css`
    padding-bottom: 20px;

    @media (max-width: 700px) {
        padding: 10px 0 30px 0;
    }
`

const styledLink = css`
    text-decoration: none;
    background-color: ${colors.beige};
    color: ${colors.white};
    padding: 9px 13px;
    font-size: 16px;
    border-radius: 5px;
    font-family: ${fonts.montserrat};

    :hover {
        color: ${colors.white};
        opacity: .9;
    }
`

const BOOK_DESCRIPTION: JSX.Element = <p css={text}><i>Euphony</i> is a new collection of poetry and prose written by Janelle Solviletti, uncovering those &lsquo;sweet sounds&rsquo; that seemingly exist with us perpetually. If only life had a soundtrack...what would ours sound like?</p>
const PLAYLIST_DESCRIPTION: JSX.Element = <p css={text}>Each poetic confession in <i>Euphony</i> dives headfirst into the intimate and secretive relationship we share with music, art, and those words that never leave us. Escape in the complexities and intensities of the deep emotions that divide dreamscapes from what is in front of our own eyes.</p>
const AMAZON_LINK = 'https://www.amazon.com/dp/B08JLXYL38?ref_=pe_3052080_397514860'
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
                image={data.getRosePhoto.childImageSharp.gatsbyImageData}
                aria-hidden
                alt=''
                css={styledBackgroundImage}
            />
            <h1 css={title}>Euphony</h1>
            <div css={section}>
                <GatsbyImage
                    image={data.getCoverPhoto.childImageSharp.gatsbyImageData}
                    alt='cameo book cover'
                    css={styledImage}
                />
                <div css={textButtonWrapper}>
                    {!navBreakpoint ? BOOK_DESCRIPTION : null}
                    <div css={buttonWrapper}>
                        <a css={styledLink} href={AMAZON_LINK}>Order now</a>
                    </div>
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

export const getCameoData = graphql`
  query getEuphonyData {
    getCoverPhoto: file(relativePath: { eq: "cameo-cover.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          layout: CONSTRAINED
        )
      }
    }
    getRosePhoto: file(relativePath: { eq: "rose-transparent.png" }) {
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