import { css } from '@emotion/react'
import { Link } from 'gatsby'
import { Dropdown } from 'semantic-ui-react'

import { navItems } from '../utilities'
import { colors, fonts } from '../styles/styles'

const navItemWrapper = css`
    display: flex;
    justify-content: space-between;
    width: 640px;
    padding-top: 25px;
`

const navItem = css`
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
const dropdownNavItem = css`
    ${navItem};
`

const NavigationItem = ({ title, link }: { title: string, link: string }) => (
    <Link css={navItem}
        to={link}
        activeClassName={'activeLink'}
        key={title}
    >
        {title}
    </Link>
)

const Nav = () => {
    return (
        <div css={navItemWrapper}>
            {navItems.map((item) => {
                if (item.nested) {
                    return (
                        <Dropdown icon={null} text={item.title} css={dropdownNavItem} simple>
                            <Dropdown.Menu css={css`background-color: ${colors.white} !important;`}>
                                {item.childItems.map(childItem => {
                                    if (!childItem.nested) {
                                        const { title, link } = childItem
                                        return (
                                            <Dropdown.Item>
                                                <NavigationItem title={title} link={link} />
                                            </Dropdown.Item>
                                        )
                                    }
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    )
                } else {
                    const { link, title } = item
                    return <NavigationItem title={title} link={link} />
                }
            })}
        </div>
    )
}

export default Nav