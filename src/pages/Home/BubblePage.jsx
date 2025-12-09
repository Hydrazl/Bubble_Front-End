import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../../components/Postagem";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import Status from "../../components/Status";

const BubblePage = () => {
    const { id } = useParams(); // id da bolha da URL
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${API_URL}/bubbles/${id}/posts`);
                const data = await res.json();
                setPosts(data);
            } catch (err) {
                console.error("Erro ao buscar posts da bolha:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [id]);

    // Remove post do estado local ao deletar
    const handleRemovePost = (postId) => {
        setPosts((prev) => prev.filter((p) => p.id !== postId));
    };

    if (loading) return <div>Carregando posts...</div>;

    return (
        <div className="bubble-page">
            <Status />
            <Header />
            <Aside />

            <main className="feed-container">
                {posts.length === 0 && <p>Nenhum post nesta bolha ainda.</p>}

                {posts.map((post) => (
                    <Post
                        key={post.id}
                        postId={post.id}
                        userId={post.author?.id || ""}
                        name={post.author?.name || post.author?.nickname || "Usuário"}
                        id={post.author?.username ? `${post.author.username}` : "@user"}
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
                        onDelete={handleRemovePost}
                    />
                ))}
            </main>
        </div>
    );
};

export default BubblePage;
