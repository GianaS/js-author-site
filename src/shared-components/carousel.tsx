import { Fragment } from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Carousel } from 'react-responsive-carousel'
import { css } from '@emotion/react'
import { Icon } from 'semantic-ui-react'

import { colors } from '../styles/sharedStyles'
import ImageCard from './imageCard'
import { MOBILE_BREAKPOINT } from '../utilities'

const carousel = css`
    width: 100%;
    padding: 30px 0;
`

const centerMode = css`
    display: none;

    @media (min-width: ${MOBILE_BREAKPOINT}px) {
        display: block;
    }
`

const notCenterMode = css`
    display: block;

    @media (min-width: ${MOBILE_BREAKPOINT}px) {
        display: none;
    }
`

const arrowStyles = css`
    position: absolute;
    z-index: 2;
    top: calc(50% - 15px);
    cursor: pointer;

    font-size: 24px;
    box-shadow: 0 2px 8px ${colors.grey};
    border-radius: 50%;
    background-color: ${colors.white};
    color: ${colors.grey};

    :hover {
        background-color: ${colors.offWhite}; 
    }
`

const icon = css`
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin: 0 !important;
`

const makeRightArrow = (onClickHandler: () => void, label: string) => (
    <div
        role='button'
        onClick={onClickHandler}
        title={label}
        css={css`${arrowStyles}; left: 15px; padding: 9px 9px 9px 6px;`}>
        <Icon name='caret left' css={icon} />
    </div>
)

const makeLeftArrow = (onClickHandler: () => void, label: string) => (
    <div
        role='button'
        onClick={onClickHandler}
        title={label}
        css={css`${arrowStyles}; right: 15px; padding: 9px 6px 9px 9px;`}>
        <Icon name='caret right' css={icon} />
    </div>
)

type CustomImage = {
    imageData: IGatsbyImageData
    caption: string
    altText: string
}

type CustomCarouselProps = {
    childArray: CustomImage[]
    hasMultipleViews?: boolean
    isCard?: boolean
}

const CustomCarousel = ({ childArray, isCard = false, hasMultipleViews = true }: CustomCarouselProps) => {
    const contents = (
        childArray.map((child, index) => (
            isCard
                ?
                <ImageCard
                    key={index}
                    imageData={child.imageData}
                    altText={child.altText}
                    caption={child.caption}
                />
                : <GatsbyImage
                    key={index}
                    image={child.imageData}
                    alt={child.altText}
                    css={css`height: 500px; box-shadow: 0 2px 8px ${colors.grey};`}
                />

        ))
    )

    return (
        <Fragment>
            {hasMultipleViews && (
                <Carousel
                    showArrows
                    infiniteLoop
                    showStatus={false}
                    centerSlidePercentage={40}
                    centerMode={true}
                    useKeyboardArrows
                    showThumbs={false}
                    css={css`${carousel}; ${centerMode}`}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && makeRightArrow(onClickHandler, label)
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && makeLeftArrow(onClickHandler, label)
                    }
                >
                    {contents}
                </Carousel>
            )}
            <Carousel
                showArrows
                infiniteLoop
                showStatus={false}
                centerSlidePercentage={40}
                centerMode={false}
                useKeyboardArrows
                showThumbs={false}
                css={css`${carousel}; ${notCenterMode}`}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && makeRightArrow(onClickHandler, label)
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && makeLeftArrow(onClickHandler, label)
                }
            >
                {contents}
            </Carousel>
        </Fragment>
    )
}

export default CustomCarousel
export {
    CustomImage
}