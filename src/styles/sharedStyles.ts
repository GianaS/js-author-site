import { css, SerializedStyles } from '@emotion/react'

import { MOBILE_BREAKPOINT } from '../utilities'

const colors = {
    black: '#000000',
    white: '#F6F6F3',
    grey: '#424242',
    beige: '#9e7762',
    purple: '#d8c3d8',
    offWhite: '#e3dede',
    sweetBrown: '#A63D40',
    green: '#7DAA7B',
    redOrange: '#DA532D',
    mintGreen: '#D8E6D8',
    greenForText: '#7CAB7D'
}

const fonts = {
    megrim: 'Megrim',
    montserrat: 'Montserrat',
    zeyada: 'Zeyada',
    yesevaOne: 'Yeseva One',
    cinzelDecorative: 'Cinzel Decorative'
}

const bodyWrapper = css`
    margin: 0 auto;
    width: 80%;
    max-width: 1600px;

    @media (max-width: ${MOBILE_BREAKPOINT}px) {
        width: 90%;
    }
`

const grid = css`
    display: grid;

    @media (min-width: ${MOBILE_BREAKPOINT}px) {
        grid-template-columns: 1fr 1fr;
        column-gap: 65px;
    }
    
    @media (max-width: ${MOBILE_BREAKPOINT}px) {
        grid-template-rows: auto;
        row-gap: 65px;
    }
`

const reverseReverse = css`
    @media (max-width: ${MOBILE_BREAKPOINT - 1}px) {
        grid-row-start: 1;
    }
`

const makeBannerBlockGrid = (backgroundColor: string): SerializedStyles => css`
    ${grid};
    padding: 65px 0;
    position: relative;

    @media (max-width: ${MOBILE_BREAKPOINT}px) {
        row-gap: 30px;
    }

    ::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: -10vw;
        right: -10vw;
        background-color: ${backgroundColor};
        z-index: -1;

        @media (max-width: ${MOBILE_BREAKPOINT}px) {
            left: -5vw;
            right: -5vw;
        }
        
        @media (min-width: 1600px) {
            left: calc(-1 * (50vw - 50%));
            right: calc(-1 * (50vw - 50%));
        }
    }
`

const sectionTitle = css`
    font-family: ${fonts.yesevaOne};
    font-weight: 400;
    font-size: 72px;
    color: ${colors.black};

    @media (max-width: ${MOBILE_BREAKPOINT}px) {
        font-size: 52px;
    }
`

const paragraph = css`
    font-family: ${fonts.montserrat};
    font-size: 18px;
    padding-bottom: 14px;
    color: ${colors.black};
`

const bookImageContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const bookFlower = css`
    position: absolute;
    margin: 0 auto;
    overflow: hidden;
    top: -65px;
    bottom: -65px;
`

const bookCover = css`
    max-width: 300px;
    min-width: 250px;
    box-shadow: 2px 4px 15px ${colors.grey};

    @media (max-width: ${MOBILE_BREAKPOINT}px) {
        max-width: 255px;
        max-width: 245px;
    }
`

export {
    colors,
    fonts,
    bodyWrapper,
    grid,
    makeBannerBlockGrid,
    sectionTitle,
    paragraph,
    reverseReverse,
    bookImageContainer,
    bookFlower,
    bookCover
}