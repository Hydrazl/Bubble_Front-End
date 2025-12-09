import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import Post from "../../components/Postagem";
import { getPosts, checkLike } from "../../services/api";

const Feed = forwardRef(({ selectedBubbleId }, ref) => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, [selectedBubbleId]);

  // Busca posts do back-end (opcionalmente filtrando por bolha)
  const loadPosts = async () => {
    try {
      setLoading(true);
      const data = await getPosts(selectedBubbleId);

      const postsWithLikeStatus = await Promise.all(
        data.map(async (post) => {
          try {
            const likeStatus = await checkLike(post.id);
            return { ...post, liked: likeStatus.liked || false };
          } catch (error) {
            console.error(`Erro ao verificar like do post ${post.id}:`, error);
            return { ...post, liked: false };
          }
        })
      );

      setPosts(postsWithLikeStatus);
    } catch (error) {
      console.error("Erro ao carregar posts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Permite que componentes pais chamem loadPosts
  useImperativeHandle(ref, () => ({
    reloadPosts: loadPosts
  }));

  // Remove post imediatamente ao deletar
  const handleRemovePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  if (loading) return <div>Carregando posts...</div>;

  return (
    <main>
      {posts.map((post) => (
        <Post
          key={post.id}
          postId={post.id}
          userId={post.author?.id || ""}
          name={post.author?.nickname || "Usuário"} // mostra nickname
          id={post.author?.username || "@user"} // arroba
          description={post.description || ""}
          url_image_perfil={
            post.author?.profilePic
              ? `${API_URL}/${post.author.profilePic}`
              : "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
          }
          url_image_post={
            post.media ? `${API_URL}/uploads/users/${post.media}` : ""
          }
          initialLiked={post.liked || false}
          like_num={post.likesCount || 0}
          com_num={post.commentsCount || 0}
          onDelete={handleRemovePost} // atualiza a tela imediatamente
        />
      ))}
    </main>
  );
});

export default Feed;
