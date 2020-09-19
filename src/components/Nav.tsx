import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { navItems } from '../utilities'
import { colors, fonts } from '../styles/styles'

const NavItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 680px;
  padding-top: 25px;
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

  &:hover {
    color: ${colors.beige};
  }

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

const Nav = () => {
  return (
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
  )
}

export default Nav