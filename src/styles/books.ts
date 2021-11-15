import { css } from '@emotion/react'

import { colors } from './sharedStyles'
import { BREAKPOINT } from '../utilities'

const playlist = css`
    box-shadow: 2px 4px 15px ${colors.grey};
    height: 500px;

    @media (min-width: ${BREAKPOINT}px) {
        max-width: 400px;
    }

    @media (max-width: ${BREAKPOINT}px) {
        width: 70%;
        min-width: 280px;
    }
`

const playlistContainer = css`
    @media (max-width: ${BREAKPOINT}px) {
        display: flex;
        justify-content: center;
    }
`

const playlistTextCard = css`
    background-color: ${colors.white};
    box-shadow: 0px 4px 9px 2px rgba(0, 0, 0, 0.25);
    padding: 24px;
    height: fit-content
`


export {
    playlist,
    playlistContainer,
    playlistTextCard
}