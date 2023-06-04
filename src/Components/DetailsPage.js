import React from 'react';
import { useSelector } from "react-redux";

const DetailsPage = () => {
  const { post } = useSelector((state) => state.detailsCard);

  if (!post) return <h1>Loading...</h1>

  return (
    <>
      <h3>Post id: {post.id} details</h3>

      <div className="image" >
        <img id='img' src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
        <h3>userId: {post.userId}</h3>
        <h3>title: {post.title}</h3>
        <h3>body: {post.body}</h3>
      </div>
    </>

  )
}

export default DetailsPage
