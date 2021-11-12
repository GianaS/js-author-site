import { css } from '@emotion/react'

const colors = {
    black: 'black',
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
    padding: 35px 0;
    margin: 0 auto;
    width: 80%;
    max-width: 1600px;

    @media (max-width: 975px) {
        width: 90%;
    }
`

const grid = css`
    display: grid;

    @media (min-width: 975px) {
        grid-template-columns: 1fr 1fr;
        column-gap: 25px;
        justify-items: end;
    }
    
    @media (max-width: 976px) {
        grid-template-rows: auto;
        row-gap: 30px;
    }
`

export {
    colors,
    fonts,
    bodyWrapper,
    grid
}