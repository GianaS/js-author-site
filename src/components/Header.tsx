import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Nav from './Nav'
import MobileNav from './MobileNav'
import { colors, fonts } from '../styles/styles'
import { useMedia } from '../utilities'

const HeaderWrapper = styled.div`
  border-bottom: 1px solid ${colors.grey};
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 30px 0 30px 0;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 0 0 14px;
  }
`

const LinkWrapper = styled(Link)`
  color: ${colors.grey};
  text-decoration: none;
  font-family: ${fonts.megrim};
  font-weight: normal;
  margin-top: 0;
  text-transform: uppercase;
  font-size: 38px;
  font-weight: 900;
  padding: 15px 0;

  @media (max-width: 700px) {
    font-size: 30px;
  }

  &:hover {
    color: ${colors.grey};
  }
`

const Header = (): JSX.Element => {
  const navBreakpoint = typeof window !== 'undefined'
    ? useMedia('(max-width: 700px)')
    : undefined

  const Navigation = navBreakpoint === undefined ? null
    : navBreakpoint ? <MobileNav /> : <Nav />

  return (
    <HeaderWrapper id='header-wrapper'>
      <LinkWrapper to='/' >
        Janelle Solviletti
      </LinkWrapper>
      {Navigation}
    </HeaderWrapper>
  )
}

export default Header