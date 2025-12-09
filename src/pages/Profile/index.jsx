import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header';
import { followUser, checkFollowStatus, getPosts, checkLike } from '../../services/api';
import Post from '../../components/Postagem';
import './Profile.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export default function Profile() {
    const [isFollowing, setIsFollowing] = useState(false);
    const [followersCount, setFollowersCount] = useState(0);
    const [followingCount, setFollowingCount] = useState(0);

    const [userPosts, setUserPosts] = useState([]);
    const [loadingPosts, setLoadingPosts] = useState(false);
    const [postsCount, setPostsCount] = useState(0);
    const userStorage = localStorage.getItem('user');
    const userParsed = userStorage ? JSON.parse(userStorage) : null;
    const currentUserId = userParsed?.id;

    const { userId } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('posts');

    const token = localStorage.getItem('token');

    const handleFollow = async () => {
        try {
            await followUser(userId);
            setIsFollowing(!isFollowing);
            setFollowersCount(prev => isFollowing ? prev - 1 : prev + 1);
        } catch (error) {
            console.error('Erro ao seguir:', error);
        }
    };

    const loadUserPosts = async () => {
        try {
            setLoadingPosts(true);
          
            const allPosts = await getPosts();

           
            const userFilteredPosts = allPosts.filter(post =>
                String(post.author?.id) === String(userId)
            );

            const postsWithLikes = await Promise.all(
                userFilteredPosts.map(async (post) => {
                    const like = await checkLike(post.id);
                    console.log(`Post ${post.id} - Like data:`, like);
                  
                    return {
                        ...post,
                        liked: like.liked,
                        likesCount: post.likesCount 
                    };
                })
            );

            console.log('Posts with likes:', postsWithLikes);
            setUserPosts(postsWithLikes);
        } catch (error) {
            console.error('Erro ao carregar posts:', error);
            setUserPosts([]);
        } finally {
            setLoadingPosts(false);
        }
    };

    const handleRemovePost = (id) => {
        setUserPosts(prevPosts => prevPosts.filter((post) => post.id !== id));
    };

    useEffect(() => {
        if (!token || !userId) {
            setError('Token ou userId não encontrado');
            setLoading(false);
            return;
        }

     
        const loadProfileData = async () => {
            try {
                
                const profileRes = await axios.get(`${API_URL}/profile/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                console.log('=== DADOS DO PERFIL ===');
                console.log('Perfil:', profileRes.data);

                setData(profileRes.data);
                setFollowersCount(profileRes.data.followersCount || 0);
                setFollowingCount(profileRes.data.followingCount || 0);
                setPostsCount(profileRes.data.postsCount || 0);

               
                if (String(currentUserId) !== String(userId)) {
                    try {
                        const followStatus = await checkFollowStatus(userId);
                        console.log('Status de seguir:', followStatus);
                        setIsFollowing(followStatus.isFollowing || false);
                    } catch (err) {
                        console.error('Erro ao verificar status de seguir:', err);
                        setIsFollowing(false);
                    }
                } else {
                    setIsFollowing(false);
                }

                setLoading(false);
            } catch (err) {
                console.error('Erro:', err.response?.data || err);
                setError(err.response?.data?.message || 'Erro ao carregar perfil');
                setLoading(false);
            }
        };

        loadProfileData();
        loadUserPosts();
    }, [userId, token, currentUserId]);

    if (loading) {
        return (
            <div className="profile-container">
                <div className="profile-header">
                    <Header />
                </div>
                <div className="profile-main">
                    <div style={{ color: '#666', padding: '50px' }}>Carregando...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="profile-container">
                <div className="profile-header">
                    <Header />
                </div>
                <div className="profile-main">
                    <div style={{ color: 'red', padding: '50px' }}>Erro: {error}</div>
                </div>
            </div>
        );
    }

    return (
        <div className="profile-container">
            <div className="profile-header">
                <Header />
            </div>

            <main className="profile-main">
                <div className="profile-content">
                   
                    <div className="profile-banner">
                        {data?.banner ? (
                            <img src={`${API_URL}/${data.banner}`} alt="Banner" />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-tl from-blue-900 to-cyan-800"></div>
                        )}
                    </div>

                    <div className="profile-child-container">
                     
                        <div className="profile-info">
                            <div className="profile-avatar">
                                {data?.profilePic ? (
                                    <img src={`${API_URL}/${data.profilePic}`} alt="Avatar" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-4xl text-gray-400">
                                        <img src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png' alt='Avatar' />
                                    </div>
                                )}
                            </div>

                            <div className="profile-details">
                                <h1 className="profile-name">{data?.nickname || 'Usuário'}</h1>
                                <p className="profile-username">@{data?.username || userId}</p>

                                <div className="profile-stats">
                                    <div className="profile-stat">
                                        <span className="profile-stat-number">{postsCount}</span>
                                        <span className="profile-stat-label">Posts</span>
                                    </div>
                                    <div className="profile-stat">
                                        <span className="profile-stat-number">{followersCount}</span>
                                        <span className="profile-stat-label">Seguidores</span>
                                    </div>
                                    <div className="profile-stat">
                                        <span className="profile-stat-number">{followingCount}</span>
                                        <span className="profile-stat-label">Seguindo</span>
                                    </div>
                                </div>
                            </div>

                            <div className="profile-follow">
                                {String(currentUserId) !== String(userId) && (
                                    <button
                                        onClick={handleFollow}
                                        className={isFollowing ? 'btn-following' : 'btn-follow'}
                                    >
                                        {isFollowing ? 'Seguindo' : 'Seguir'}
                                    </button>
                                )}
                                {data?.description && (
                                    <div className="profile-bio-box">
                                        <span className="profile-bio-label">Bio</span>
                                        <p className="profile-bio-text">{data.description}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                
                        <div className="profile-tabs">
                            <div className={`profile-tab ${activeTab === 'posts' ? 'profile-tab-active' : ''}`} onClick={() => setActiveTab('posts')}>
                                Posts
                            </div>
                            <div className={`profile-tab ${activeTab === 'likes' ? 'profile-tab-active' : ''}`} onClick={() => setActiveTab('likes')}>
                                Curtidas
                            </div>
                        </div>

                       
                        <div className="profile-grid">
                            {activeTab === 'posts' && (
                                <div className="col-span-3">
                                    {loadingPosts ? (
                                        <div className="col-span-1 text-center text-gray-500 py-10">
                                            Carregando posts...
                                        </div>
                                    ) : (
                                        userPosts.map((post) => (
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
                                        ))
                                    )}
                                </div>
                            )}
                           
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}