import React, { useEffect } from 'react';

const Posts = ({ isLoading, posts, error, getPosts }) => {
  
  useEffect(() => {
    getPosts();
    return () => {};
  }, [getPosts]);

  if (!posts) return null

  const render = () => {
    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error.message}</h1>;
    if (posts) {
      return posts.map(post => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      });
    }
  };

  return <div>{render()}</div>;
};

export default Posts;
