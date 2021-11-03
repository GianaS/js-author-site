import { useState } from 'react'
import { css } from '@emotion/react'
import { Link } from 'gatsby'

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


const menu = css`
    background-color: ${colors.white};
    position: absolute;
    background-color: #f1f1f1;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 8%);
    z-index: 1001;
    display: flex;
    flex-direction: column;
    border-radius: 2%;
    box-sizing: border-box;
`

const nestedItem = css`
    ${navItem};
    padding: 12px 12px;
    margin-right: 0;

    :hover {
        background-color: #ddd;
    }
`

const Nav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div css={navItemWrapper}>
            {navItems.map((item) => {
                if (item.nested) {
                    return (
                        <div
                            key={item.title}
                            onFocus={() => setIsOpen(true)}
                            onMouseOver={() => setIsOpen(true)}
                            onMouseLeave={() => setIsOpen(false)}
                            tabIndex={0}
                        >
                            <a css={css`${navItem}; cursor: pointer;`} >
                                {item.title}
                            </a>
                            {isOpen && (
                                <div css={menu}>
                                    {item.childItems.map((childItem) => {
                                        if (!childItem.nested) {
                                            const { title, link } = childItem
                                            return (
                                                <Link
                                                    css={nestedItem}
                                                    to={link}
                                                    activeClassName={'activeLink'}
                                                    key={title}
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {title}
                                                </Link>
                                            )
                                        }
                                    })}
                                </div>
                            )}
                        </div>
                    )
                } else {
                    const { link, title } = item
                    return (
                        <Link css={navItem}
                            to={link}
                            activeClassName={'activeLink'}
                            key={title}
                        >
                            {title}
                        </Link>
                    )
                }
            })}
        </div>
    )
}

export default Nav