import "./Home.css";
import Header from "../../components/Header";
import Feed from "../../components/Feed";
import Status from "../../components/Status";
import Aside from "../../components/Aside";
import { usePosts } from "../../context/PostContext";
import { useState, useRef } from "react";

function Home() {
  const { posts } = usePosts();
  const feedRef = useRef();

  const handlePostCreated = () => {
    // Recarregar posts no Feed
    if (feedRef.current && feedRef.current.reloadPosts) {
      feedRef.current.reloadPosts();
    }
  };

  return (
    <div className="home-body">

      <header className="home-header">
        <Header />
      </header>

      <main className="home-main">
        <Status onPostCreated={handlePostCreated} />
        <Feed ref={feedRef} posts={posts} />
      </main>

      <aside className="home-aside">
        <Aside />
      </aside>

    </div>
  );
}

export default Home;
