import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/apiActions";
import { useNavigate } from "react-router-dom";
import { addToDetails } from "../redux/actions/detailsActions";

const HomePage = () => {
    const { loading, posts, error } = useSelector(state => state.posts);
    console.log(loading, posts, error)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    function handleCardDetails(post) {
        dispatch(addToDetails(post));
        navigate(`/item/${post.id}`);
    }

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>

    return (
        <div className="mainDiv">
            {
                posts && posts.map((post) => {
                    return (
                        <div className="items" key={post.id} onClick={() => {
                            handleCardDetails(post)
                        }}>
                            <img id="imgs" src={`https://picsum.photos/100?random=${post.id}`} alt={post.title} />
                            {/* <img id="imgs" src={`https://unsplash.com/photos/iia8_SU0DVk=${post.id}`} alt={post.title} /> */}
                            {/* https://unsplash.com/photos/iia8_SU0DVk */}
                            <div className="texts">
                                <p>userId: {post.userId}</p>
                                <p>title: {post.title.slice(0, 10)}</p>
                                <p>body: {post.body.slice(0, 50)}</p>
                                <p>Read More...</p>
                            </div>

                        </div>
                    )
                })
            }

        </div>

    )
}

export default HomePage


