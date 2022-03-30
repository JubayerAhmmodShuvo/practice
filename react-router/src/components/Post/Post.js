import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


const Post = () => {
    const [post, setPost] = useState([]);
  useEffect(() => { 
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPost(data));
  }, []);
  return (
    <div>
      <h2>Every Post facebook ever had : {post.length}</h2>
    
      {
        post.map(post => <Link
          key={post.id}
          to={`/post/${post.id}`}>{post.id}</Link>) 
      }

      <Outlet />
    </div>
  );
};

export default Post;