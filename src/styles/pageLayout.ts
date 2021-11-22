import { css } from '@emotion/react'

import { colors, fonts } from '../styles/sharedStyles'

const headerWrapper = css`
    border-bottom: 1px solid ${colors.grey};
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 30px 0 20px 0;
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;

    @media (max-width: 700px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 0 0 0 14px;
    }
`

const linkWrapper = css`
    color: ${colors.grey};
    text-decoration: none;
    font-family: ${fonts.cinzelDecorative} cursive;
    margin-top: 0;
    text-transform: uppercase;
    font-size: 38px;
    padding: 15px 0;

    @media (max-width: 700px) {
        font-size: 30px;
        line-height: 28px;
    }

    @media (max-width: 395px) {
        font-size: 28px;
        line-height: 28px;
    }

    &:hover {
        color: ${colors.grey};
    }
`

const mobileNavButton = css`
    background-color: transparent !important;
    color: ${colors.grey} !important;
    font-size: 30px !important;
    padding-right: 10px !important;
`

export {
    headerWrapper,
    linkWrapper,
    mobileNavButton
}