import { useState, useEffect } from 'react'

const isBrowser = typeof window !== "undefined"

const useMedia = (query: string): boolean => {
    const [matches, setMatches] = useState(
        isBrowser && window.matchMedia(query).matches
    )

    useEffect(() => {
        const media = window.matchMedia(query)

        if (media.matches !== matches) {
            setMatches(media.matches)
        }

        const listener = () => setMatches(media.matches)
        media.addListener(listener)

        return () => media.removeListener(listener)
    }, [query])

    return matches
}

export {
    useMedia
}