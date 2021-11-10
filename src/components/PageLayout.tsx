import { ReactNode, Fragment } from 'react'
import { css } from '@emotion/react'

import Header from './Header'

const bodyWrapper = css`
  width: 900px;
  margin: 35px auto;

  @media (max-width: 975px) {
    width: 90%;
  }
`

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Header />
      <div css={bodyWrapper}>
        {children}
      </div>
    </Fragment>
  )
}

export default PageLayout