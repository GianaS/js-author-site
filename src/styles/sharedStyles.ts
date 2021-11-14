import { css } from '@emotion/react'

import { BREAKPOINT } from '../utilities'

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
    mintGreen: '#D8E6D8'
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

    @media (max-width: ${BREAKPOINT}px) {
        width: 90%;
    }
`

const grid = css`
    display: grid;

    @media (min-width: ${BREAKPOINT}px) {
        grid-template-columns: 1fr 1fr;
        column-gap: 25px;
    }
    
    @media (max-width: ${BREAKPOINT + 1}px) {
        grid-template-rows: auto;
        row-gap: 30px;
    }
`

const makeBannerBlockGrid = (backgroundColor: string) => css`
    ${grid};
    padding: 65px 0;
    position: relative;

    ::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: -10vw;
        right: -10vw;
        background-color: ${backgroundColor};
        z-index: -1;

        @media (max-width: ${BREAKPOINT}px) {
            left: -5vw;
            right: -5vw;
        }
    }
`

export {
    colors,
    fonts,
    bodyWrapper,
    grid,
    makeBannerBlockGrid
}