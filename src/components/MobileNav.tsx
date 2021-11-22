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
import {
    navItems,
    NotNestedNavItem,
    AUTHOR_AMAZON_LINK,
    LINKED_IN_LINK,
    SPOTIFY_LINK,
    INSTAGRAM_LINK
} from '../utilities'

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

const footer = css`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 12px;
`

const iconLink = css`
    font-size: 36px;
    color: ${colors.white};

    :hover {
        color: ${colors.white};
    }
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
                        <Fragment>
                            {mobileNavItems.map(({ title, link }) => {
                                return (
                                    <Menu.Item style={{ borderBottom: `${colors.offWhite} 1px solid` }} key={title}>
                                        <Link css={menuItemWrapper} to={link} onClick={() => setShowSidebar(false)}>
                                            <p css={itemText}>{title}</p>
                                        </Link>
                                    </Menu.Item>
                                )
                            })}
                            <div css={footer}>
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
                        </Fragment>
                    </Sidebar>
                    : null
            }
        </Fragment>
    )
}

export default MobileNav
