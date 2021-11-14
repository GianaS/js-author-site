import { css, } from '@emotion/react'

import { fonts, colors } from '../styles/sharedStyles'

const styledLink = css`
    text-decoration: none;
    background-color: ${colors.beige};
    color: ${colors.white};
    padding: 10px 74px;
    font-size: 18px;
    border-radius: 4%;
    font-family: ${fonts.montserrat};
    box-shadow: 0 2px 8px ${colors.grey};

    :hover {
        color: ${colors.white};
        opacity: .9;
    }
`

const Button = ({ label, href }: { label: string, href: string }) => {
    return <a css={styledLink} href={href}>{label}</a>
}

export default Button