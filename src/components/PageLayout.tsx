import React, { ReactNode } from 'react'
import styled from 'styled-components'

import Header from './Header'
import { navItems } from '../utilities'

const VALID_PATHS = navItems.map(item => item.link)

const BodyWrapper = styled.div`
  width: 725px;

  @media (max-width: 750px) {
    width: 90%;
  }

  ${({ pathname }: { pathname: string }) => (
    VALID_PATHS.includes(pathname) ? 'margin: 35px auto;' : 'margin: 0 auto;'
  )}
`

type PageLayoutProps = {
  children: ReactNode,
  location: { pathname: string }
}

const PageLayout = ({ children, location }: PageLayoutProps) => {
  const { pathname } = location

  return (
    <>
      <Header />
      <BodyWrapper pathname={pathname}>
        {children}
      </BodyWrapper>
    </>
  )
}

export default PageLayout