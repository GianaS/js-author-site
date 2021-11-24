type NotNestedNavItem = {
    title: string
    link: string
    nested: false
}

type NavItem = NotNestedNavItem | {
    title: string
    nested: true
    childItems: NotNestedNavItem[]
}

const navItems: NavItem[] = [
    {
        title: 'Home',
        link: '/',
        nested: false
    },
    {
        title: 'Poems',
        link: '/poems',
        nested: false
    },
    {
        title: 'Books',
        nested: true,
        childItems: [
            {
                title: 'Euphony',
                link: '/euphony',
                nested: false
            },
            {
                title: 'The Cameo',
                link: '/cameo',
                nested: false
            }
        ]
    },
    {
        title: 'Contact',
        link: '/contact',
        nested: false
    }
]

const CAMEO_AMAZON_LINK = 'https://www.amazon.com/dp/B08JLXYL38?ref_=pe_3052080_397514860'
const EUPHONY_AMAZON_LINK = 'https://www.amazon.com/dp/B09M57DW2B/ref=cm_sw_em_r_mt_dp_M0DDMSCZZ8AMYGKCR6Y1'
const AUTHOR_AMAZON_LINK = 'https://www.amazon.com/Janelle-Nicole-Solviletti/e/B08K7LKWV8?ref_=dbs_p_pbk_r00_abau_000000'
const LINKED_IN_LINK = 'http://linkedin.com/in/janelle-solviletti'
const SPOTIFY_LINK = 'https://open.spotify.com/user/1253446971?si=uiZ6iE7NSnO8EWCfgweR9g'
const INSTAGRAM_LINK = 'https://www.instagram.com/janellesolviletti'

const MOBILE_BREAKPOINT = 975

export {
    navItems,
    NavItem,
    NotNestedNavItem,
    CAMEO_AMAZON_LINK,
    EUPHONY_AMAZON_LINK,
    MOBILE_BREAKPOINT,
    AUTHOR_AMAZON_LINK,
    LINKED_IN_LINK,
    SPOTIFY_LINK,
    INSTAGRAM_LINK
}