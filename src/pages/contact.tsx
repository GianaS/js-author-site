import { css } from '@emotion/react'
import { Icon } from 'semantic-ui-react'

import Seo from '../components/Seo'
import { fonts, colors, bodyWrapper } from '../styles/sharedStyles'

const title = css`
  font-family: ${fonts.montserrat};
  font-weight: 400;
  padding-bottom: 20px;
`

const text = css`
  font-size: 18px;
  line-height: 30px;
  font-family: ${fonts.montserrat};
`

const iconSection = css`
  display: flex;
  justify-content: space-between;
  padding-top: 34px;
  width: 190px;
`

const styledIcon = css`
  color: ${colors.green};
  font-size: 3em !important;

  &:hover {
    opacity: 0;
  }
`

const BOOK_EMAIL: JSX.Element = <a href='mailto:book.janellesolviletti@gmail.com'>book.janellesolviletti@gmail.com</a>
const META_DESCRIPTION = `Connect with Janelle Solviletti via email, Instagram, Linkedin, or Spotify.  To order personalized copies or for other inqueries, please email ${BOOK_EMAIL}.`

const Contact = (): JSX.Element => {
    return (
        <div css={css`${bodyWrapper}; padding: 65px 0;`}>
            <Seo
                title='Contact | Janelle Solviletti'
                description={META_DESCRIPTION}
            />
            <h1 css={title}>Connect With Janelle</h1>
            <p css={text}>
                To order personalized copies or for other inqueries, please email {BOOK_EMAIL}
            </p>
            <div css={iconSection}>
                <a href='https://www.instagram.com/janellesolviletti'>
                    <Icon css={styledIcon} link name='instagram' />
                </a>
                <a href='https://open.spotify.com/user/1253446971?si=uiZ6iE7NSnO8EWCfgweR9g'>
                    <Icon css={styledIcon} link name='spotify' />
                </a>
                <a href='http://linkedin.com/in/janelle-solviletti'>
                    <Icon css={styledIcon} link name='linkedin' />
                </a>
            </div>
        </div>
    )
}

export default Contact