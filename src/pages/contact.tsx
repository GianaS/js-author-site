import React from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

import Seo from '../components/Seo'
import { fonts, colors } from '../styles/styles'

const Title = styled.h1`
  font-family: ${fonts.montserrat};
  font-weight: 400;
  padding-bottom: 20px;
`

const Text = styled.p`
  font-size: 18px;
  line-height: 30px;
  font-family: ${fonts.montserrat};
`

const IconSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 34px;
  width: 190px;
`

const StyledIcon = styled(Icon)`
  color: ${colors.green};
  font-size: 3em !important;

  &:hover {
    opacity: 0;
  }
`

const Contact = (): JSX.Element => {
  const BookEmail: JSX.Element = <a href='mailto:book.janellesolviletti@gmail.com'>book.janellesolviletti@gmail.com</a>
  return (
    <>
      <Seo title='Contact | Janelle Solviletti' />
      <Title>Connect With Me</Title>
      <Text>
        To order personalized copies of <i>The Cameo</i>, or for other queries, please email {BookEmail}
      </Text>
      <IconSection>
        <a href='https://www.instagram.com/janellesolviletti'>
          <StyledIcon link name='instagram' />
        </a>
        <a href='https://open.spotify.com/user/1253446971?si=uiZ6iE7NSnO8EWCfgweR9g'>
          <StyledIcon link name='spotify' />
        </a>
        <a href='http://linkedin.com/in/janelle-solviletti'>
          <StyledIcon link name='linkedin' />
        </a>
      </IconSection>
    </>
  )
}

export default Contact