import { css, } from '@emotion/react'

import { fonts, colors } from '../styles/sharedStyles'
import { MOBILE_BREAKPOINT } from '../utilities'

const styledLink = css`
    text-decoration: none;
    background-color: ${colors.beige};
    color: ${colors.white};
    width: 228px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border-radius: 4%;
    font-family: ${fonts.montserrat};
    box-shadow: 0 2px 8px ${colors.grey};

    :hover {
        color: ${colors.white};
        opacity: .8;
    }

    @media (max-width: ${MOBILE_BREAKPOINT}px) {
        width: 170px;
    }
`

const Button = ({ label, href }: { label: string, href: string }) => {
    return <a css={styledLink} href={href}>{label}</a>
}

export default Button