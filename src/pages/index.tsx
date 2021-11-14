import { Fragment } from 'react'
import { css } from '@emotion/react'
import { Link } from 'gatsby'

import Seo from '../components/Seo'
import { bodyWrapper, grid } from '../styles/sharedStyles'
import { Button } from '../shared-components'
import { EUPHONY_AMAZON_LINK, CAMEO_AMAZON_LINK } from '../utilities'
import {
    euphonyBackground,
    sectionTitle,
    paragraph,
    chip,
    learnMoreLink,
    cameoBackground
} from '../styles/home'

const META_DESCRIPTION = 'Janelle Solviletti is a writer from Boston, Massachusetts. Euphony is her second poetry collection, following her debut poetry book, The Cameo, released in September 2020. Previously, she published works in The Horn Pond Review, The Feathertale Review and The Somerville Lyrical. She attended Marist College in Poughkeepsie, New York, and currently lives and works in Boston.'
const EUPHONY_DESCRIPTION = <Fragment><i>Euphony</i> is a new collection of poetry and prose written by Janelle Solviletti, uncovering those ‘sweet sounds’ that seemingly exist with us perpetually. If only life had a soundtrack….what would ours sound like? Each poetic confession in Euphony dives headfirst into the intimate and secretive relationship we share with music, art, and those words that never leave us.'</Fragment>
const CAMEO_DESCRIPTION = <Fragment><i>The Cameo</i> begins with an astonishing claim: “I wish to disunite the postulation that love and time are one and the same.” From there, it offers lyrical proof for this claim, through means wily “urban revolt” and “manmade revelation,” relational “In sequence/it seems you are immemorial” and sacred. Depicting with great pathos the damage of two souls intertwining, as well as the even bolder proposition that romantic disillusion itself is a mirage: “I think I made you up.”</Fragment>

const Home = (): JSX.Element => {
    return (
        <div css={css`position: relative;`}>
            <Seo
                title='Home | Janelle Solviletti'
                description={META_DESCRIPTION}
            />
            <div css={euphonyBackground} />
            <div css={cameoBackground} />
            <div css={bodyWrapper}>
                <div css={css`${grid}; height: 600px;`}>
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
                <div css={css`${grid}; height: 600px;`}>
                    <div>
                        <h1 css={sectionTitle}>The Cameo</h1>
                        <p css={paragraph}>{CAMEO_DESCRIPTION}</p>
                        <div css={css`display: flex; align-items: center;x`}>
                            <Button label='Buy now' href={CAMEO_AMAZON_LINK} />
                            <Link css={learnMoreLink} to='/cameo' >
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div>image stuff goes here</div>
                </div>
            </div>
        </div>
    )
}

export default Home