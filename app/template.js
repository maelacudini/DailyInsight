'use client'
import Lenis from "@studio-freight/lenis"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { pagetransition } from "./utils/animations"

export default function Template({ children }) {
    const pathname = usePathname();

    useEffect(() => {
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <AnimatePresence mode="wait">
            <motion.div key={pathname} variants={pagetransition} initial='initial' animate='animate' exit='exit'>
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
