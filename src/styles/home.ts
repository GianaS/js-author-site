import { css } from '@emotion/react'

import { colors, fonts } from './sharedStyles'
import { BREAKPOINT } from '../utilities'

const reverseReverse = css`
    @media (max-width: ${BREAKPOINT + 1}px) {
        grid-column-start: 1;
        grid-row-start: 1;
    }
`

const sectionTitle = css`
    font-family: ${fonts.yesevaOne};
    font-weight: 400;
    font-size: 72px;
    color: ${colors.black};
`

const paragraph = css`
    font-family: ${fonts.montserrat};
    font-size: 18px;
    padding-bottom: 14px;
    color: ${colors.black};
`

const chip = css`
    width: 136px;
    height: 40px;
    font-size: 18px;
    background-color: ${colors.green};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.white};
    font-style: italic;
    font-family: ${fonts.montserrat};
    font-weight: 600;
    border-radius: 4%;
`

const learnMoreLink = css`
    font-family: ${fonts.montserrat};
    font-size: 18px;
    text-decoration: none;
    color: ${colors.black};
    margin-left: 12%;

    :hover {
        color: ${colors.beige};
    }
`

const cameoImageContainer = css`
    ${reverseReverse};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const cameoRose = css`
    position: absolute;
    margin: 0 auto;
    overflow: hidden;
    top: -35px;
    bottom: -35px;
`

const cameoCover = css`
    max-width: 300px;
    min-width: 250px;
    box-shadow: 2px 4px 15px ${colors.grey};
`

export {
    sectionTitle,
    paragraph,
    chip,
    learnMoreLink,
    cameoCover,
    cameoImageContainer,
    cameoRose,
    reverseReverse
}