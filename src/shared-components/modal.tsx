import { useEffect } from 'react'
import { css } from '@emotion/react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import { colors, fonts } from '../styles/sharedStyles'

const backdrop = css`
    position: fixed;
    display: flex;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
    z-index: 1001;
`

const modal = css`
    position: relative;
    background-color: ${colors.white};
    box-shadow: 0 2px 8px ${colors.grey};
    width: 60%;
    display: flex;
    flex-direction: column;
    padding: 30px;
`

const closeButton = css`
    background-color: ${colors.white};
    padding: 10px 16px;
    border-radius: 50%;
    box-shadow: 0 2px 8px ${colors.grey};
    position: absolute;
    right: 0;
    bottom: 100%;
    margin-bottom: 15px;
    cursor: pointer;

    :hover {
        background-color: ${colors.offWhite}; 
    }
`

const captionContainer = css`
    display: grid;
    grid-area: '1/1';
    position: relative;
    place-items: center;
`

const captionHeading = css`
    font-size: 18px;
    font-family: ${fonts.montserrat};
    padding-top: 30px;
    font-weight: 400;
`

type ModalProps = {
    caption: string
    imageData: IGatsbyImageData
    altText: string
    setIsModalOpen: (_: boolean) => void
}

const Modal = ({ setIsModalOpen, caption, altText, imageData }: ModalProps) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        const closeButton = document.getElementById('close-button')
        closeButton && closeButton.focus()

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <div css={backdrop} onClick={() => setIsModalOpen(false)}>
            <div css={modal}>
                <div
                    tabIndex={0}
                    id='close-button'
                    role='button'
                    css={closeButton}
                    onClick={() => setIsModalOpen(false)}
                    onKeyUp={(event) => event.key === "Enter" && setIsModalOpen(false)}
                >
                    X
                </div>
                <div css={css`display: grid;`}>
                    <GatsbyImage
                        image={imageData}
                        alt={altText}
                        css={css`grid-area: '1/1';`}
                    />
                    <div css={captionContainer}>
                        <h1 css={captionHeading}>{caption}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal