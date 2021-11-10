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
                title: 'The Cameo',
                link: '/cameo',
                nested: false
            },
            {
                title: 'Euphony',
                link: '/euphony',
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

export {
    navItems,
    NavItem,
    NotNestedNavItem,
    CAMEO_AMAZON_LINK
}