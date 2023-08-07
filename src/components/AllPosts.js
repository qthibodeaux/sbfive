import { useParams } from 'react-router-dom'
import { useAuth } from "../useAuth"

function AllPosts() {
    const { sess } = useAuth()
    const { pageNumber } = useParams()

    if (sess) {
        return (
            <div>
                AllPosts { pageNumber }
            </div>
          )
    }
}

export default AllPosts