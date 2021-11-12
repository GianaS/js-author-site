import { ReactNode, Fragment } from 'react'

import Header from './Header'

const PageLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>
    )
}

export default PageLayout