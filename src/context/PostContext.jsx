import { createContext, useContext, useState, useEffect } from 'react';
import { getPosts } from '../services/api';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadPosts = async () => {
        try {
            setLoading(true);
            const data = await getPosts();
            setPosts(data);
        } catch (error) {
            console.error('Erro ao carregar posts:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadPosts();
    }, []);

    const addPost = (newPost) => {
        setPosts([newPost, ...posts]);
    };

    return (
        <PostContext.Provider value={{ posts, loadPosts, addPost, loading }}>
            {children}
        </PostContext.Provider>
    );
};

export const usePosts = () => {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error('usePosts deve ser usado dentro de um PostProvider');
    }
    return context;
};