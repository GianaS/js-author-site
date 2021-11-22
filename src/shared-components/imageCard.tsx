import { css } from '@emotion/react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import { colors, fonts } from '../styles/sharedStyles'

const card = css`
    background-color: ${colors.white};
    box-shadow: 0 2px 8px ${colors.grey};
    position: relative;
    height: 680px;
    margin: 30px;
`

const captionContainer = css`
    display: grid;
    position: relative;
    place-items: center;
`

const captionHeading = css`
    font-size: 18px;
    font-family: ${fonts.montserrat};
    padding-top: 30px;
    font-weight: 400;
    font-style: italic;
`

type ImageCardProps = {
    caption: string
    imageData: IGatsbyImageData
    altText: string
}

const ImageCard = ({ caption, altText, imageData }: ImageCardProps) => {
    return (
        <div css={card}>
            <div css={css`display: grid; padding: 30px;`}>
                <GatsbyImage
                    image={imageData}
                    alt={altText}
                    css={css`height: 550px; object-position: 'bottom';`}
                />
                <div css={captionContainer}>
                    <h1 css={captionHeading}>{caption}</h1>
                </div>
            </div>
        </div>
    )
}

export default ImageCard