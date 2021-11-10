import { Fragment } from 'react'
import { css } from '@emotion/react'

import Seo from '../components/Seo'
import { fonts } from '../shared-styles/styles'

const title = css`
    font-family: ${fonts.montserrat};
    font-weight: 400;
    margin-bottom: 22px;
`

const META_DESCRIPTION = 'Janelle Solviletti is a writer from Boston, Massachusetts. Euphony is her second poetry collection, following her debut poetry book, The Cameo, released in September 2020. Previously, she published works in The Horn Pond Review, The Feathertale Review and The Somerville Lyrical. She attended Marist College in Poughkeepsie, New York, and currently lives and works in Boston.'

const Home = (): JSX.Element => {
    return (
        <Fragment>
            <Seo
                title='Home | Janelle Solviletti'
                description={META_DESCRIPTION}
            />
            <h1 css={title}>Work in Progress</h1>
        </Fragment>
    )
}

export default Home