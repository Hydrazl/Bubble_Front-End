import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import Post from "../../components/Postagem";
import { getPosts, checkLike } from "../../services/api";

const Feed = forwardRef((props, ref) => {
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
            const postsWithLikeStatus = await Promise.all(
                data.map(async (post) => {
                    try {
                        const likeStatus = await checkLike(post.id);
                        return {
                            ...post,
                            liked: likeStatus.liked || false
                        };
                    } catch (error) {
                        console.error(`Erro ao verificar like do post ${post.id}:`, error);
                        return {
                            ...post,
                            liked: false
                        };
                    }
                })
            );
            setPosts(postsWithLikeStatus);
        } catch (error) {
            console.error('Erro ao carregar posts:', error);
        } finally {
            setLoading(false);
        }
    };

    // Expor método reloadPosts para componente pai
    useImperativeHandle(ref, () => ({
        reloadPosts: loadPosts
    }));

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
                        url_image_perfil={post.author?.profilePic ? `${API_URL}/${post.author?.profilePic}` : "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"}
                        url_image_post={post.media ? `${API_URL}/uploads/users/${post.media}` : ''}
                        initialLiked={post.liked}
                        like_num={post.likesCount}
                        com_num={post.commentsCount}
                        onDelete={handleRemovePost}
                    />
                </>
            ))}
        </main>
    );
});

export default Feed;