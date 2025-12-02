import { createContext, useContext, useState, useEffect } from "react";
import { getPosts } from "../services/api";

export const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("");

  async function loadPosts(selectedFilter = "") {
    try {
      const data = await getPosts(selectedFilter);
      setPosts(data);
    } catch (err) {
      console.log("Erro ao carregar posts:", err);
    }
  }

  useEffect(() => {
    loadPosts(filter);
  }, [filter]);

  return (
    <PostContext.Provider value={{ posts, setFilter }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePosts() {
  return useContext(PostContext);
}
