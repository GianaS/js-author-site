import { Fragment } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'

import Seo from '../components/Seo'
import { CAMEO_AMAZON_LINK } from '../utilities'
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

} from '../styles/books'

const META_DESCRIPTION = 'The Cameo is a short collection of poetry and prose depicting the damage of two souls intertwining, as well as the even bolder proposition that romantic disillusion itself is a mirage. A metaphysical investigation into desire, disorder, and the natural world. Order The Cameo now!'
const CAMEO_DESCRIPTION = (
    <Fragment> <i>The Cameo</i> begins with an astonishing claim: &lsquo;I wish to disunite the postulation that love and time are one and the same.&rsquo; From there, it offers lyrical proof for this claim, through means wily &lsquo;urban revolt&rsquo; and &lsquo;manmade revelation,&rsquo; relational &lsquo;In sequence/it seems you are immemorial&rsquo; and sacred. Depicting with great pathos the damage of two souls intertwining, as well as the even bolder proposition that romantic disillusion itself is a mirage: &lsquo;I think I made you up.&rsquo; The metaphysical investigation into desire, disorder, and the natural world, invoke the declamation: &lsquo;I am nothing but my own end&rsquo; as well as the argument for the powers of being to prevail against the temporal forces that oppose it. Step inside, and &lsquo;luxuriate the moments&rsquo; with a new voice that proclaims, &lsquo;My lips are an index of sinners I’m not done speaking for.&rsquo; Cryptic note in his coat pocket on November’s Eve… Your shadow slipping into the sun and its glare caught up in a summer glance secret, this is we meet again holding tongues… We are magnetars; made up of what’s left behind, intensities above it all…
        <br />
        Cameo
        <br />
        A usually brief literary or filmic piece that brings into delicate or sharp relief the character of a person, place, or event.
        <br />
        *Miriam Webster Dictionary
    </Fragment>
)

const Cameo = ({ data }: { data: unknown }): JSX.Element => {
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
                        <Button label='Buy now' href={CAMEO_AMAZON_LINK} />
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
  }
`

export default Cameo