import { css } from '@emotion/react'

import { colors, fonts } from './sharedStyles'

const euphonyBackground = css`
    background-color: ${colors.offWhite};
    height: 600px;
    width: 100%;
    position: absolute;
    z-index: -1;
`

const cameoBackground = css`
    background-color: ${colors.mintGreen};
    height: 600px;
    width: 100%;
    position: absolute;
    z-index: -1;
    top: 600px;
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
    padding-left: 80px;

    :hover {
        color: ${colors.beige};
    }
`

export {
    euphonyBackground,
    sectionTitle,
    paragraph,
    chip,
    learnMoreLink,
    cameoBackground
}