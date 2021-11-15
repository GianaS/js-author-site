import { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'

import Seo from '../components/Seo'
import {
} from '../styles/books'

const META_DESCRIPTION = 'Euphony is a new collection of poetry and prose written by Janelle Solviletti, uncovering those sweet sounds that seemingly exist with us perpetually. If only life had a soundtrack...what would ours sound like? Each poetic confession in Euphony dives headfirst into the intimate and secretive relationship we share with music, art, and those words that never leave us. Escape in the complexities and intensities of the deep emotions that divide dreamscapes from what is in front of our own eyes.'

const Euphony = ({ data }: { data: unknown }): JSX.Element => {
    return (
        <div>euphony</div>
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