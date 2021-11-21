import { Fragment } from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Carousel } from 'react-responsive-carousel'
import { css } from '@emotion/react'

import { colors } from '../styles/sharedStyles'
import ImageCard from './imageCard'
import { MOBILE_BREAKPOINT } from '../utilities'

const sharedStyles = css`
    width: 100%;
    padding: 30px 0;
    margin: 0 auto;
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

type CustomImage = {
    imageData: IGatsbyImageData
    caption: string
    altText: string
}

type CustomCarouselProps = {
    childArray: CustomImage[]
    isCard?: boolean
}

const CustomCarousel = ({ childArray, isCard = false }: CustomCarouselProps) => {
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
            <Carousel
                showArrows
                infiniteLoop
                showStatus={false}
                centerSlidePercentage={40}
                centerMode={true}
                useKeyboardArrows
                css={css`${sharedStyles}; ${centerMode}`}
            >
                {contents}
            </Carousel>
            <Carousel
                showArrows
                infiniteLoop
                showStatus={false}
                centerSlidePercentage={40}
                centerMode={false}
                useKeyboardArrows
                css={css`${sharedStyles}; ${notCenterMode}`}
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