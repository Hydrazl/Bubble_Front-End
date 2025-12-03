import { useEffect, useState } from "react";
import Post from "../../components/Postagem";
import { getPosts } from "../../services/api";

export default function Feed() {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        try {
            setLoading(true);
            const data = await getPosts();
            console.log('Posts carregados:', data);
            setPosts(data);
        } catch (error) {
            console.error('Erro ao carregar posts:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleRemovePost = (id) => {
        setPosts(prevPosts => prevPosts.filter((posts) => posts.id !== id));
    };

    if (loading) {
        return <div>Carregando posts...</div>;
    }

    return (
        <main>
            {/* Posts do banco de dados */}
            {posts.map((post) => (
                <>
                <Post
                    key={post.id}
                    name={post.author?.nickname || "Usuário"}
                    id={post.author?.username || "@user"}
                    postId={post.id}
                    userId={post.author?.id || ""}
                    description={post.description || ""}
                    url_image_perfil={`${API_URL}/${post.author?.profilePic}` || "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"}
                    url_image_post={ post.media ? `${API_URL}/${post.media}` : ""}
                    like_num={0}
                    com_num={0}
                    onDelete={handleRemovePost}
                />
                </>
            ))}
        </main>
    );
}