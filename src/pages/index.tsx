import { Fragment } from 'react'

import video from '../assets/videos/cameoPromo1.mp4'
import Seo from '../components/Seo'

const META_DESCRIPTION = 'Janelle Solviletti is a twenty-five-year-old writer from the outskirts of Boston. She graduated from Marist College in Poughkeepsie, New York, with a Masters Degree in Marketing. The Cameo is her debut poetry book, which encapsulates the tensions between time and love and their competing entities. She believes that it is the visionary who can call a moment into existence without the help or hindrance of the hands of time. She hopes those who delve into her poetry will recollect moments and commemorate those relationships with others, the natural world, passions and past times; whatever it may be that was once taken for granted by time’s natural order.'

const Home = (): JSX.Element => {
    return (
        <Fragment>
            <Seo
                title='Home | Janelle Solviletti'
                description={META_DESCRIPTION}
            />
            <video width='100%' height='auto' autoPlay muted loop playsInline title='The Cameo promotion video'>
                <source src={video} type='video/mp4' />
            </video>
        </Fragment>
    )
}

export default Home