import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Carousel } from 'react-responsive-carousel'
import { css } from '@emotion/react'

type HomeImage = {
    imageData: IGatsbyImageData
    caption: string
    altText: string
}

const CustomCarousel = ({ childArray }: { childArray: HomeImage[] }) => {
    return (
        <Carousel
            showArrows
            infiniteLoop
        >
            {childArray.map((child, index) =>
                <GatsbyImage
                    key={index}
                    image={child.imageData}
                    alt={child.altText}
                    css={css`height: 500px;`}
                />
            )}
        </Carousel>
    )
}

export default CustomCarousel
export {
    HomeImage
}