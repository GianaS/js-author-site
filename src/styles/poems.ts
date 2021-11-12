import { css } from '@emotion/react'

import { fonts, colors } from './sharedStyles'

const greenBackgroundSection = css`
    background-color: ${colors.mintGreen};
    height: 400px;
    width: 100%;
    position: absolute;
    z-index: -1;
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

const poemCard = css`
    background-color: ${colors.offWhite};
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.25);
    padding: 30px;
`

const cardTitle = css`
    font-family: ${fonts.yesevaOne};
    font-weight: 400;
    padding-bottom: 20px;
`

const yearHeading = css`
    font-weight: 400;
    font-size: 22px;
    padding-bottom: 8px;
    font-family: ${fonts.yesevaOne};
`

const formattedPoems = css`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    padding-bottom: 14px;
    font-family: ${fonts.montserrat};
`

const poem = css`
    display: inline-block;
    margin-bottom: 18px;
`

const imageSection = css`
    @media (min-width: 975px) {
        min-width: 430px;
        max-width: 650px;
    }
`

const caption = css`
    padding-top: 10px;
    font-family: ${fonts.montserrat};
`

const roseIcon = css`
    height: 35px;
    width: 35px;
    top: -6px;
    display: inline-block;
`

export {
    cardTitle,
    yearHeading,
    formattedPoems,
    poem,
    caption,
    roseIcon,
    greenBackgroundSection,
    poemCard,
    grid,
    imageSection
}