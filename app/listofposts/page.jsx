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
      {
        posts.map((post) => (
          <p>{post.description}</p>
        ))
      
        }
    </div>
  );
}

  
  