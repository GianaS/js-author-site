import { css } from '@emotion/react'
import { Icon } from 'semantic-ui-react'

import Seo from '../components/Seo'
import {
    wrapper,
    backgroundSection,
    text,
    bookLink,
    infoCard,
    cardTitle,
    iconSection,
    iconLink
} from '../styles/contact'
import {
    AUTHOR_AMAZON_LINK,
    INSTAGRAM_LINK,
    LINKED_IN_LINK,
    SPOTIFY_LINK
} from '../utilities'

const BOOK_EMAIL: JSX.Element = <a css={bookLink} href='mailto:book.janellesolviletti@gmail.com'>book.janellesolviletti@gmail.com</a>
const META_DESCRIPTION = `Connect with Janelle Solviletti via email, Instagram, Linkedin, Spotify, and Amazon.  To order personalized copies or for other inqueries, email ${BOOK_EMAIL}.`

const Contact = (): JSX.Element => {
    return (
        <div css={css`position: relative;`}>
            <Seo
                title='Contact | Janelle Solviletti'
                description={META_DESCRIPTION}
            />
            <div css={backgroundSection} />
            <div css={wrapper}>
                <div css={infoCard}>
                    <h1 css={cardTitle}>Connect With Janelle</h1>
                    <p css={text}>
                        To order personalized copies or for other inqueries, please email {BOOK_EMAIL}
                    </p>
                    <div css={iconSection}>
                        <a css={iconLink} href={INSTAGRAM_LINK}>
                            <Icon link name='instagram' />
                        </a>
                        <a css={iconLink} href={SPOTIFY_LINK}>
                            <Icon link name='spotify' />
                        </a>
                        <a css={iconLink} href={LINKED_IN_LINK}>
                            <Icon link name='linkedin' />
                        </a>
                        <a css={iconLink} href={AUTHOR_AMAZON_LINK}>
                            <Icon link name='amazon' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact