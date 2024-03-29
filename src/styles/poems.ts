import { css } from '@emotion/react'

import { MOBILE_BREAKPOINT } from '../utilities'
import { fonts, colors } from './sharedStyles'

const poemCard = css`
    background-color: ${colors.offWhite};
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.25);
    padding: 30px;
`

const cardTitle = css`
    font-family: ${fonts.yesevaOne};
    font-weight: 400;
    padding-bottom: 20px;
`

const yearHeading = css`
    font-weight: 400;
    font-size: 22px;
    padding-bottom: 8px;
    font-family: ${fonts.yesevaOne};
`

const formattedPoems = css`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    padding-bottom: 14px;
    font-family: ${fonts.montserrat};
`

const poem = css`
    display: inline-block;
    margin-bottom: 18px;
`

const imageSection = css`
    @media (min-width: ${MOBILE_BREAKPOINT}px) {
        min-width: 430px;
        max-width: 650px;
    }
`

const caption = css`
    padding-top: 10px;
    font-family: ${fonts.montserrat};
`

const cameoIcon = css`
    height: 35px;
    width: 35px;
    top: -8px;
`

const euphonyIcon = css`
    width: 22px;
    top: -11px;
    margin-right: 5px;
`

export {
    cardTitle,
    yearHeading,
    formattedPoems,
    poem,
    caption,
    euphonyIcon,
    cameoIcon,
    poemCard,
    imageSection
}