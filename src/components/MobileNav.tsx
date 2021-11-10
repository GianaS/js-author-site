import { useState, Fragment } from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/react'
import {
    Menu,
    Button,
    Icon,
    Sidebar
} from 'semantic-ui-react'

import { colors, fonts } from '../styles/sharedStyles'
import { navItems, NotNestedNavItem } from '../utilities'

const button = css`
  background-color: transparent !important;
  color: ${colors.grey} !important;
  font-size: 30px !important;
  padding-right: 10px !important;
`

const menuItemWrapper = css`
  font-size: 18px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  width: inherit;
`

const itemText = css`
  padding-left: 12px;
  font-family: ${fonts.montserrat};
`

const MobileNav = (): JSX.Element => {
    const [showSidebar, setShowSidebar] = useState(false)

    const mobileNavItems = navItems.reduce((acc, item) => {
        if (item.nested) {
            return [...acc, ...item.childItems.map((childItem) => ({
                title: childItem.title,
                link: childItem.link,
                nested: false as const
            }))]
        }
        return [...acc, item]
    }, [] as NotNestedNavItem[])

    return (
        <Fragment>
            <Button css={button} icon onClick={() => setShowSidebar(!showSidebar)}>
                <Icon name='bars' />
            </Button>
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
                        style={{ backgroundColor: colors.beige }}
                    >
                        {mobileNavItems.map(({ title, link }) => {
                            return (
                                <Menu.Item style={{ borderBottom: `${colors.offWhite} 1px solid` }} key={title}>
                                    <Link css={menuItemWrapper} to={link} onClick={() => setShowSidebar(false)}>
                                        <p css={itemText}>{title}</p>
                                    </Link>
                                </Menu.Item>
                            )
                        })}
                    </Sidebar>
                    : null
            }
        </Fragment>
    )
}

export default MobileNav
