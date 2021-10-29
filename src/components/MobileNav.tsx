import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {
  Menu,
  Button,
  Icon,
  Sidebar
} from 'semantic-ui-react'

import { colors, fonts } from '../styles/styles'
import { navItems } from '../utilities'

const StyledButton = styled(Button)`
  background-color: transparent !important;
  color: ${colors.grey} !important;
  font-size: 30px !important;
  padding-right: 10px !important;
`

const MenuItemWrapper = styled(Link)`
  font-size: 18px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  width: inherit;
`

const ItemText = styled.p`
  padding-left: 12px;
  font-family: ${fonts.montserrat};
`

const MobileNav = (): JSX.Element => {
  const [showSidebar, setShowSidebar] = React.useState(false)

  const items = [
    {
      title: 'Home',
      link: '/'
    },
    ...navItems
  ]

  return (
    <>
      <StyledButton icon onClick={() => setShowSidebar(!showSidebar)}>
        <Icon name='bars' />
      </StyledButton>
      {
        showSidebar
          ?
          <Sidebar
            as={Menu}
            inverted
            onHide={() => setShowSidebar(false)}
            vertical
            visible={showSidebar}
            direction='right'
            style={{backgroundColor: colors.beige}}
          >
            {items.map(({ title, link }) => {
              return (
                <Menu.Item style={{borderBottom: `${colors.offWhite} 1px solid`}} key={title}>
                  <MenuItemWrapper to={link} onClick={() => setShowSidebar(false)}>
                    <ItemText>{title}</ItemText>
                  </MenuItemWrapper>
                </Menu.Item>
              )
            })}
          </Sidebar>
          : null
      }
    </>
  )
}

export default MobileNav
