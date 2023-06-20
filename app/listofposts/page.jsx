'use client'
const getpostdata = async () => {
    const post = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    return post.json();
  }
  
  import React, { useEffect, useState } from 'react';
  
  export default function ListOfPosts() {
    useEffect(() => {
      const fetchData = async () => {
        const postsData = await getpostdata();
        setPosts(postsData);
      };
  
      fetchData();
    }, []);
  
    const [posts, setPosts] = useState([]);
  
    return (
      <div>
        <p>List of Posts</p>
        console.log(posts);
        {posts.map((post, index) => (
          <p key={index}>{post.description}</p>
        ))}
      </div>
    );
  }
  
  