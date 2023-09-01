import { useContext, useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom'
import { useAuth } from "../useAuth"
import supabaseClient from "../supabaseClient"

function AllPosts() {
    const { allpost, category } = useParams()
    const { sess } = useAuth()
    const [bumper, setBumper] = useState(0)
    const [post, setPost] = useState(0)

    useEffect(() => {
        const queryPageNumber = category ? +category : 1;
        supabaseClient
            .rpc("get_posts", {page_number: queryPageNumber})
            .select("*")
    }, [sess, bumper, post])


    return (
        <div>
            AllPosts {allpost} {category}
        </div>
        )
}

export default AllPosts