import { css } from '@emotion/react'
import { Link } from 'gatsby'

import Seo from '../components/Seo'
import { bodyWrapper, grid } from '../styles/sharedStyles'
import { Button } from '../shared-components'
import { EUPHONY_AMAZON_LINK } from '../utilities'
import {
    offWhiteBackgroundSection,
    sectionTitle,
    paragraph,
    chip,
    learnMoreLink
} from '../styles/home'

const META_DESCRIPTION = 'Janelle Solviletti is a writer from Boston, Massachusetts. Euphony is her second poetry collection, following her debut poetry book, The Cameo, released in September 2020. Previously, she published works in The Horn Pond Review, The Feathertale Review and The Somerville Lyrical. She attended Marist College in Poughkeepsie, New York, and currently lives and works in Boston.'
const EUPHONY_DESCRIPTION = 'Euphony is a new collection of poetry and prose written by Janelle Solviletti, uncovering those ‘sweet sounds’ that seemingly exist with us perpetually. If only life had a soundtrack….what would ours sound like? Each poetic confession in Euphony dives headfirst into the intimate and secretive relationship we share with music, art, and those words that never leave us.'

const Home = (): JSX.Element => {
    return (
        <div css={css`position: relative;`}>
            <Seo
                title='Home | Janelle Solviletti'
                description={META_DESCRIPTION}
            />
            <div css={offWhiteBackgroundSection} />
            <div css={bodyWrapper}>
                <div css={grid}>
                    <div>image grid goes here</div>
                    <div>
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
            </div>
        </div>
    )
}

export default Home