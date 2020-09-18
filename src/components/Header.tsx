import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { navItems } from '../utilities'
import { colors, fonts } from '../styles/styles'

const NavWrapper = styled.div`
  border-bottom: 1px solid ${colors.grey};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 30px 0 30px 0;
  background-color: ${colors.white}
`

const LinkWrapper = styled(Link)`
  color: ${colors.grey};
  text-decoration: none;
`

const Title = styled.h1`
  font-family: ${fonts.megrim};
  font-weight: normal;
  margin-top: 0;
  text-transform: uppercase;
  font-size: 38px;
  font-weight: 900;
`

const NavItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 680px;
  padding-top: 5px;
`

const NavItem = styled(Link)`
  font-family: ${fonts.montserrat};
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 7px;
  font-size: 18px;
  color: ${colors.beige};
  font-weight: 500;
  margin-right: -7px;
  display: inline-block;
  position: relative;

  &.activeNavItem {
    &:after {
      content: "";
      position: absolute;
      z-index: -1;
      left: 0;
      bottom: -6px;
      right: 7px;
      height: 2px;
      background: ${colors.beige}; 
    }
  }
`

const Header = forwardRef((_, ref): JSX.Element => {
  return (
    <NavWrapper ref={ref}>
      <LinkWrapper to='/' >
        <Title>Janelle Solviletti</Title>
      </LinkWrapper>
      <NavItemWrapper>
        {
          navItems.map(({ title, link }) => {
            return (
              <NavItem
                to={link}
                activeClassName={'activeNavItem'}
                key={title}
              >
                {title}
              </NavItem>
            )
          })
        }
      </NavItemWrapper>
    </NavWrapper>
  )
})

export default Header