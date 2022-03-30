import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => { 
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, [ postId ]);
  return (
    <div>
      <h2>Post Detail:{postId}</h2>
      <h5>{post.title}</h5>
      <p>{ post.body}</p>
    </div>
  );
};

export default PostDetail;