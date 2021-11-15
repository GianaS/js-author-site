import { css } from '@emotion/react'

import { colors, fonts } from './sharedStyles'

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

    :hover {
        color: ${colors.redOrange};
    }
`

export {
    chip,
    learnMoreLink,
    publishedWorkLink,
    authorBlockSection
}