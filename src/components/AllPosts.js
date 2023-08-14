import { useParams } from "react-router-dom"

function AllPosts() {
    const { allpost, category } = useParams()
    return (
        <div>
            AllPosts {allpost} {category}
        </div>
        )
}

export default AllPosts