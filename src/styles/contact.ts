import { css } from '@emotion/react'

import { fonts, colors, bodyWrapper } from '../styles/sharedStyles'

const backgroundSection = css`
    background-color: ${colors.grey};
    height: 300px;
    width: 100%;
    position: absolute;
    z-index: -1;
    opacity: .3;
`

const wrapper = css`
    ${bodyWrapper};
    padding: 65px 0;
    display: flex;
    justify-content: center;
`

const text = css`
    font-size: 18px;
    line-height: 30px;
    font-family: ${fonts.montserrat};
`

const bookLink = css`
    color: ${colors.greenForText};
    font-weight: 500;
    overflow-wrap: break-word;

    :hover {
        color: ${colors.greenForText};
        opacity: .8;
    }
`

const infoCard = css`
    background-color: ${colors.white};
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.25);
    padding: 50px;
    max-width: 900px;
    width: 100%;

    @media (max-width: 700px) {
        padding: 25px;
    }
`

const cardTitle = css`
    font-family: ${fonts.yesevaOne};
    font-weight: 400;
    padding-bottom: 20px;
`

const iconSection = css`
    display: flex;
    justify-content: space-between;
    width: 200px;
    padding: 20px 0 0 0;
`

const iconLink = css`
    font-size: 3em;
    color: ${colors.greenForText};

    :hover {
        color: ${colors.greenForText};
    }
`

export {
    wrapper,
    backgroundSection,
    text,
    bookLink,
    infoCard,
    cardTitle,
    iconSection,
    iconLink
}