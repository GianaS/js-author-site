import { useEffect } from 'react'
import { css } from '@emotion/react'

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
    background-color: purple;
    width: 50%;
    height: 50%;
`

type ModalProps = {
    setIsModalOpen: (_: boolean) => void
}

const Modal = ({ setIsModalOpen }: ModalProps) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <div css={backdrop} onClick={() => setIsModalOpen(false)}>
            <div css={modal}>modal</div>
        </div>
    )
}

export default Modal