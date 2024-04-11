//this is a custom hook
//the name of this custom hook starts from "use" which is a convention
//since the useEffect logic is reused in both the components
//so we will be keeping this logic inside the custom hook
//Since we don't have any JSX inside this so we will not import "React"

import {useEffect} from 'react'

function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
}

export default useDocumentTitle