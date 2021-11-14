import { css, SerializedStyles } from '@emotion/react'

import { fonts, colors } from './sharedStyles'
import { BREAKPOINT } from '../utilities'

const makePageWrapper = (headerHeight: string): SerializedStyles => (
    css`
        height: calc(100vh - ${headerHeight});
        
        iframe {
            box-shadow: 2px 4px 15px ${colors.grey};
            margin-left: 40px;

            @media (max-width: 700px) {
                margin-left: 0;
            }
        }
    `
)

const styledBackgroundImage = css`
    position: fixed;
    z-index: -101;
    opacity: 8%;
    margin-left: 140px;

    @media (max-width: ${BREAKPOINT}px) {
        margin-left: 0px;
    }
`

const title = css`
    font-family: ${fonts.montserrat};
    font-weight: 400;
    padding-bottom: 20px;
`

const section = css`
    display: flex;
    padding-bottom: 80px;

    @media (max-width: 700px) {
        flex-direction: column;
        padding-bottom: 40px;
    }
`

const styledImage = css`
    box-shadow: 2px 4px 15px ${colors.grey};
    width: 296px;
    height: 442px;

    @media (max-width: 700px) {
        margin-bottom: 30px;
    }
`

const text = css`
    font-family: ${fonts.montserrat};
    line-height: 1.7;
    font-size: 18px;
    padding-bottom: 10px;
`

const textButtonWrapper = css`
    padding-left: 40px;
    flex: 1;

    @media (max-width: 700px) {
        padding-left: 0;
    }
`

export { 
    makePageWrapper,
    styledBackgroundImage,
    title,
    section,
    styledImage,
    text,
    textButtonWrapper
}