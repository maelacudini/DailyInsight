'use client'
import Lenis from "@studio-freight/lenis"
import { useEffect, useState } from "react"

export default function Template({ children }) {
    // const [loader, setLoader] = useState(true)

    useEffect(() => {
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
        // setTimeout(() => {
        //     setLoader(false)
        // }, 2000);
        return () => {
            lenis.destroy()
        }
    }, [])

    // return <AnimatePresence>{loader ? <Loader key='loader' /> : children}</AnimatePresence>
    return <div>{children}</div>
}
