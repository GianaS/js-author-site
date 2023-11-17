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
        title: 'Contact',
        link: '/contact',
        nested: false
    }
]

const LINKED_IN_LINK = 'http://linkedin.com/in/janelle-solviletti'
const SPOTIFY_LINK = 'https://open.spotify.com/user/1253446971?si=uiZ6iE7NSnO8EWCfgweR9g'
const INSTAGRAM_LINK = 'https://www.instagram.com/janellesolviletti'

const MOBILE_BREAKPOINT = 975

export {
    navItems,
    NavItem,
    NotNestedNavItem,
    MOBILE_BREAKPOINT,
    LINKED_IN_LINK,
    SPOTIFY_LINK,
    INSTAGRAM_LINK
}