import { css } from '@emotion/react'

import { colors, sectionTitle, makeBannerBlockGrid } from './sharedStyles'
import { MOBILE_BREAKPOINT } from '../utilities'

const carousel = css`
    ${makeBannerBlockGrid(colors.white)};
    display: flex;
    justify-content: center;
    margin: 0 -10vw;
    max-width: 1920px;

    @media (max-width: ${MOBILE_BREAKPOINT}px) {
        margin: 0 -5vw;
    }

    @media (min-width: 1920px) {
        margin: 0 auto;
    }
`

const playlist = css`
    box-shadow: 2px 4px 15px ${colors.grey};
    height: 500px;

    @media (min-width: ${MOBILE_BREAKPOINT}px) {
        max-width: 400px;
    }

    @media (max-width: ${MOBILE_BREAKPOINT}px) {
        width: 100%;
    }
`

const playlistContainer = css`
    @media (max-width: ${MOBILE_BREAKPOINT}px) {
        display: flex;
        justify-content: center;
    }
`

const playlistTextCard = css`
    background-color: ${colors.white};
    box-shadow: 0px 4px 9px 2px rgba(0, 0, 0, 0.25);
    padding: 24px;
    height: fit-content;
`

const inspirationTitle = css`
    ${sectionTitle};
    font-size: 24px;

    @media (max-width: ${MOBILE_BREAKPOINT}px) {
        font-size: 24px;
    }
`

export {
    playlist,
    playlistContainer,
    playlistTextCard,
    inspirationTitle,
    carousel
}