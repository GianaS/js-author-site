import { css } from '@emotion/react'

import { colors, fonts } from './sharedStyles'

const offWhiteBackgroundSection = css`
    background-color: ${colors.offWhite};
    height: 600px;
    width: 100%;
    position: absolute;
    z-index: -1;
`

const euphonySectionGrid = css`
    background-color: ${colors.offWhite};
`

const sectionTitle = css`
    font-family: ${fonts.yesevaOne};
    font-weight: 400;
    font-size: 72px;
`

const paragraph = css`
    font-family: ${fonts.montserrat};
    font-size: 18px;
    padding-bottom: 14px;
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
    color: ${colors.blackFont};
    padding-left: 80px;

    :hover {
        color: ${colors.beige};
    }
`

export {
    offWhiteBackgroundSection,
    sectionTitle,
    paragraph,
    chip,
    learnMoreLink,
    euphonySectionGrid
}