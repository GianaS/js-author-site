import { Fragment } from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/react'
import {
    Menu,
    Icon,
    Sidebar
} from 'semantic-ui-react'

import { colors, fonts } from '../styles/sharedStyles'
import {
    navItems,
    NotNestedNavItem,
    LINKED_IN_LINK,
    SPOTIFY_LINK,
    INSTAGRAM_LINK
} from '../utilities'

const sidebar = css`
    background-color: ${colors.beige} !important;
    box-shadow: 0 2px 8px ${colors.grey} !important;
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

type MobileSidebarProps = {
    showMobileSidebar: boolean
    setShowMobileSidebar: (_: boolean) => void
}

const MobileSidebar = ({ setShowMobileSidebar, showMobileSidebar }: MobileSidebarProps): JSX.Element => {
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
        <Sidebar
            as={Menu}
            inverted
            onHide={() => setShowMobileSidebar(false)}
            vertical
            visible={showMobileSidebar}
            direction='right'
            css={sidebar}
        >
            <Fragment>
                {mobileNavItems.map(({ title, link }) => {
                    return (
                        <Menu.Item style={{ borderBottom: `${colors.offWhite} 1px solid` }} key={title}>
                            <Link css={menuItemWrapper} to={link} onClick={() => setShowMobileSidebar(false)}>
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
                </div>
            </Fragment>
        </Sidebar>
    )
}

export default MobileSidebar
