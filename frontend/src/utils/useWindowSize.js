import { useEffect, useState } from "react"

export const useWindowSize = () => {
    const [size, setSize] = useState([window.innerWidth, window.innerWidth])

    useEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerWidth])
        }
        window.addEventListener('resize', updateSize)

        return () => window.removeEventListener('resize', updateSize) 
    }, [])

    return {
        width: size[0],
        height: size[1]
    }
}