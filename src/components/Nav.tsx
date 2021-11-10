import { useState } from 'react'
import { css } from '@emotion/react'
import { Link } from 'gatsby'

import { navItems } from '../utilities'
import { colors, fonts } from '../shared-styles/styles'

const navItemWrapper = css`
    display: flex;
    justify-content: space-between;
    width: 670px;
    padding-top: 25px;
`

const navItem = css`
    font-family: ${fonts.montserrat};
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 6px;
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
    box-shadow: 2px 2px 9px 4px rgb(0 0 0 / 10%);
    z-index: 1001;
    display: flex;
    flex-direction: column;
    border-radius: 2%;
    box-sizing: border-box;
    width: 200px;
    left: -50px;
    top: 100%;
`

const nestedItem = css`
    ${navItem};
    padding: 12px 12px;
    margin-right: 0;
    border-radius: 2%;

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
                            css={css`position: relative; padding-bottom: 10px;`}
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
                            activeClassName={'activeNavItem'}
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