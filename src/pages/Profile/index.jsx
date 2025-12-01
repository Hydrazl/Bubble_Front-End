import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header';
import './Profile.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export default function Profile() {
    const [isFollowing, setIsFollowing] = useState(false);
    const [followersCount, setFollowersCount] = useState(0);
    const userStorage = localStorage.getItem('user');
    const userParsed = userStorage ? JSON.parse(userStorage) : null;
    const currentUserId = userParsed?.id;

    const handleFollow = async () => {
    try {
        const response = await axios.post(
        `${API_URL}/users/${userId}/follow`,
        {},
        {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            }
        }
        );
        
        setIsFollowing(!isFollowing);
        setFollowersCount(prev => isFollowing ? prev - 1 : prev + 1);
    } catch (error) {
        console.error('Erro ao seguir:', error);
    }
    };


    const { userId } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('posts');
    
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token || !userId) {
            setError('Token ou userId não encontrado');
            setLoading(false);
            return;
        }
        
        axios.get(`${API_URL}/profile/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            console.log('Dados recebidos:', res.data);
            setData(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.error('❌ Erro:', err.response?.data || err);
            setError(err.response?.data?.message || 'Erro ao carregar perfil');
            setLoading(false);
        })
    }, [userId, token]);

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
                    {/* Banner */}
                    <div className="profile-banner">
                        {data?.banner ? (
                            <img src={`${API_URL}/${data.banner}`} alt="Banner" />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-tl from-blue-900 to-cyan-800"></div>
                        )}
                    </div>

                    <div className="profile-child-container">
                        {/* Info do Perfil */}
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
                                        <span className="profile-stat-number">{data?.postsCount || 0}</span>
                                        <span className="profile-stat-label">Posts</span>
                                    </div>
                                    <div className="profile-stat">
                                        <span className="profile-stat-number">{data?.followersCount || 0}</span>
                                        <span className="profile-stat-label">Seguidores</span>
                                    </div>
                                    <div className="profile-stat">
                                        <span className="profile-stat-number">{data?.followingCount || 0}</span>
                                        <span className="profile-stat-label">Seguindo</span>
                                    </div>
                                </div>
                            </div>

                            <div className="profile-follow">
                                {String(currentUserId) !== String(userId) && (<button 
                                    onClick={handleFollow}
                                    className={isFollowing ? 'btn-following' : 'btn-follow'}
                                    >
                                    {isFollowing ? 'Seguindo' : 'Seguir'}
                                </button>)}
                                 {data?.description && (<><div className='p-1 border-2 rounded-xl border-gray-600 w-full justify-center mt-2 relative'>
                                    <span className='absolute -top-3 left-4 px-1 font-bold bg-white'>Bio</span>
                                    <p className="text-gray-700">{data.description}</p>
                                </div></>)}
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="profile-tabs">
                            <div 
                                className={`profile-tab ${activeTab === 'posts' ? 'profile-tab-active' : ''}`}
                                onClick={() => setActiveTab('posts')}
                            >
                                Posts
                            </div>
                            <div 
                                className={`profile-tab ${activeTab === 'likes' ? 'profile-tab-active' : ''}`}
                                onClick={() => setActiveTab('likes')}
                            >
                                Curtidas
                            </div>
                            <div 
                                className={`profile-tab ${activeTab === 'saved' ? 'profile-tab-active' : ''}`}
                                onClick={() => setActiveTab('saved')}
                            >
                                Salvos
                            </div>
                            <div 
                                className={`profile-tab ${activeTab === 'private' ? 'profile-tab-active' : ''}`}
                                onClick={() => setActiveTab('private')}
                            >
                                Privados
                            </div>
                        </div>

                        {/* Conteúdo baseado na tab ativa */}
                        <div className="profile-grid">
                            {activeTab === 'posts' && (
                                <div className="col-span-3 text-center text-gray-500 py-10">
                                    Nenhum post ainda
                                </div>
                            )}
                            {/* Adicione conteúdo para outras tabs aqui */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}