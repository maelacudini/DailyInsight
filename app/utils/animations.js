export const menu = {
    open: {
        width: 350,
        height: 500,
        right: 15,
        top: 15,
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
    },
    closed: {
        height: 40,
        width: 80,
        right: 30,
        top: 30,
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
    },
};


export const perspective = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 80,
        translateX: -20,
    },
    enter: (i) => ({
        opacity: 1,
        rotateX: 0,
        translateY: 0,
        translateX: 0,
        transition: {
            duration: 0.65,
            delay: 0.5 + (i * 0.1),
            ease: [.215, .61, .355, 1],
            opacity: { duration: 0.35 }
        }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] }
    }
}

export const slideIn = {
    initial: {
        opacity: 0,
        y: 20
    },
    enter: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.75 + (i * 0.1),
            ease: [.215, .61, .355, 1]
        }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, type: "tween", ease: "easeInOut" }
    }
}


export const loader = {
    initial: {
        y: 0,
        opacity: 0.1
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.3, type: "linear", ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
        y: '-100%',
        transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] }
    }
}