import { css, } from '@emotion/react'

import { fonts, colors } from '../styles/sharedStyles'

const buttonWrapper = css`
    padding-bottom: 20px;

    @media (max-width: 700px) {
        padding: 10px 0 30px 0;
    }
`

const styledLink = css`
    text-decoration: none;
    background-color: ${colors.beige};
    color: ${colors.white};
    padding: 9px 13px;
    font-size: 16px;
    border-radius: 5px;
    font-family: ${fonts.montserrat};
    box-shadow: 2px 4px 15px ${colors.grey};

    :hover {
        color: ${colors.white};
        opacity: .9;
    }
`

const Button = ({ label, href }: { label: string, href: string }) => {
    return (
        <div css={buttonWrapper}>
            <a css={styledLink} href={href}>{label}</a>
        </div>
    )
}

export default Button