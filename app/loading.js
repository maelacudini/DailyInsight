import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
    return (
        <div className='loading'>
            <Skeleton baseColor="#ebebebfd" highlightColor="#fff" />
        </div>
    )
}
