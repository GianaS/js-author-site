import { css } from '@emotion/react'

import { colors, fonts } from './sharedStyles'
import { MOBILE_BREAKPOINT } from '../utilities'

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
    font-weight: 500;

    :hover {
        color: ${colors.beige};
    }
`

const authorBlockSection = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 65px 0;
`

const publishedWorkLink = css`
    font-family: ${fonts.montserrat};
    font-size: 18px;
    text-decoration: none;
    color: ${colors.sweetBrown};
    padding: 0 0 32px 0;
    font-weight: 500;

    :hover {
        color: ${colors.redOrange};
    }
`

const gridOfImages = css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 12px;
    row-gap: 10px;

    @media (max-width: ${MOBILE_BREAKPOINT}px) {
        display: none;
    }
`

const imageCell = css`
    height: 170px;
    box-shadow: 0 2px 8px ${colors.grey};
    cursor: pointer;

    :hover {
        opacity: .8;
    }
`

const gridButton = css`
    :focus-visible {
        outline: 4px solid blue;
    }
`

export {
    chip,
    learnMoreLink,
    publishedWorkLink,
    authorBlockSection,
    gridOfImages,
    imageCell,
    gridButton
}