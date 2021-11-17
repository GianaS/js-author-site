import { useEffect, useLayoutEffect, useRef } from 'react'
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
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 530px;
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
    const closeButtonRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const closeModal = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsModalOpen(false)
            }
        }

        document.body.style.overflow = 'hidden'
        window.addEventListener('keyup', closeModal)

        return () => {
            document.body.style.overflow = 'auto'
            window.removeEventListener('keyup', closeModal)
        }
    }, [])

    useLayoutEffect(() => {
        closeButtonRef.current?.focus()
    }, [])

    return (
        <div css={backdrop} onClick={() => setIsModalOpen(false)}>
            <div css={modal} onClick={(event) => event.stopPropagation()}>
                <div
                    ref={closeButtonRef}
                    tabIndex={0}
                    id='close-button'
                    role='button'
                    css={closeButton}
                    onClick={() => setIsModalOpen(false)}
                    onKeyDown={(event) => {
                        if (event.key === 'Tab') {
                            event.preventDefault()
                        }
                    }}
                    onKeyUp={(event) => {
                        if (event.key === 'Enter') {
                            setIsModalOpen(false)
                        }
                    }}

                >
                    X
                </div>
                <div css={css`display: grid;`}>
                    <GatsbyImage
                        image={imageData}
                        alt={altText}
                        css={css`max-height: 70vh; object-position: 'bottom'`}
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