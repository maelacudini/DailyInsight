'use client' // Error components must be Client Components
import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className='error'>
            <div>
                <h2 className='errortitle'>Something went wrong!</h2>
                <button
                    className='button'
                    style={{ border: '1px solid black' }}
                    onClick={
                        () => reset()
                    }
                >
                    Try again
                </button>
            </div>
        </div>
    )
}