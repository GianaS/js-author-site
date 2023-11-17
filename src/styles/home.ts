import { css } from '@emotion/react'

import { colors, fonts } from './sharedStyles'
import { MOBILE_BREAKPOINT } from '../utilities'

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
    publishedWorkLink,
    gridOfImages,
    imageCell,
    gridButton
}