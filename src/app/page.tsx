'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from './(components)/cards/PostCard';

interface Post {
  id: number;
  date: string;
  dateGmt: string;
  type: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  status: string;
  slug: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Post[]>('https://old.imamconnect.com/wp-json/wp/v2/posts?categories=29');
        setPosts(response.data);
      } catch (err: any) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div style={{ padding: '32px' }}>
        <h1 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold' }}>Guides</h1>
        <div style={{ height: '150px', width: '100%', backgroundColor: 'red' }}></div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '32px' }}>
          <h1 style={{ marginTop: '24px', fontSize: '28px', fontWeight: 'bold' }}>Latest Guides</h1>

          {loading && (<p>Loading...</p>)}
          {error && (<p>Error: {error}</p>)}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
              padding: "20px",
            }}
          >
            {posts?.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
