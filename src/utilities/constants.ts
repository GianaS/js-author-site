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
        title: 'About',
        link: '/about',
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

export {
    navItems,
    NavItem,
    NotNestedNavItem
}