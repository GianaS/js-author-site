import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Carousel } from 'react-responsive-carousel'
import { css } from '@emotion/react'

import { colors } from '../styles/sharedStyles'
import ImageCard from './imageCard'

type CustomImage = {
    imageData: IGatsbyImageData
    caption: string
    altText: string
}

type CustomCarouselProps = {
    childArray: CustomImage[]
    centerMode?: boolean
    isCard?: boolean
}

const CustomCarousel = ({ childArray, centerMode = false, isCard = false }: CustomCarouselProps) => {
    return (
        <Carousel
            showArrows
            infiniteLoop
            showStatus={false}
            centerMode={centerMode}
            centerSlidePercentage={40}
            css={css`width: 100%; padding: 30px 0;`}
        >
            {childArray.map((child, index) => (
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

            ))}
        </Carousel>
    )
}

export default CustomCarousel
export {
    CustomImage
}