import { ReactNode, Fragment, useState } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { Link } from 'gatsby'

import Nav from './Nav'
import MobileSidebar from './MobileSidebar'
import { useMedia } from '../utilities'
import {
    headerWrapper,
    linkWrapper,
    mobileNavButton
} from '../styles/pageLayout'

const PageLayout = ({ children }: { children: ReactNode }) => {
    const [showMobileSidebar, setShowMobileSidebar] = useState(false)

    const navBreakpoint = typeof window !== 'undefined'
        ? useMedia('(max-width: 700px)')
        : undefined
    const isDesktop = navBreakpoint !== undefined && !navBreakpoint
    const isMobile = navBreakpoint !== undefined && navBreakpoint

    const DesktopNavButtons = isDesktop && <Nav />
    const MobileNavButton = isMobile && (
        <Button css={mobileNavButton} icon onClick={() => setShowMobileSidebar(!showMobileSidebar)}>
            <Icon name='bars' />
        </Button>
    )

    const Header = (
        <div css={headerWrapper} id='header-wrapper'>
            <Link css={linkWrapper} to='/' >
                Janelle Solviletti
            </Link>
            {DesktopNavButtons}
            {MobileNavButton}
        </div>
    )

    return (
        <Fragment>
            {Header}
            {isMobile && (
                <MobileSidebar
                    setShowMobileSidebar={setShowMobileSidebar}
                    showMobileSidebar={showMobileSidebar}
                />
            )}
            {children}
        </Fragment>
    )
}

export default PageLayout