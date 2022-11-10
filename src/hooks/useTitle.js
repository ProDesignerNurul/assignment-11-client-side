import { useEffect } from "react"

const useTitle = title => {
    useEffect( () => {
        document.title = `${title} - Nurul Ride Sharing`;
    } , [title])
}

export default useTitle;