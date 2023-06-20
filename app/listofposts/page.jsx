'use client'
const getpostdata = async () => {
  const post = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  return post.json();
}

import React, { useEffect, useState } from 'react';

export default function ListOfPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getpostdata();
      const objects = Object.values(data.bpi);
      setPosts(objects);
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>List of Posts</p>
      {Array.isArray(posts) ? (
        posts.map((post, index) => (
          <p key={index}>{post.description}</p>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

  
  