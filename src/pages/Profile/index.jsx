import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BubbleRecommended from '../../components/BubbleRecoment';
import Header from '../../components/Header';
import BannerProfile from './../../components/BannerProfile/index';
import GridPost from './../../components/GridPost/index';
import photoProfile from '../../assets/meusegundo place.jpeg';
import banner from '../../assets/ocean.jpg';
import imgBubble from '../../assets/gitbolha.png';
import './Profile.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export default function Profile() {
    const { userId } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
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
            console.log('✅ Dados recebidos:', res.data);
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
        return <div style={{ color: 'white', padding: '50px' }}>Carregando...</div>;
    }

    if (error) {
        return <div style={{ color: 'red', padding: '50px' }}>Erro: {error}</div>;
    }

    return (
        <>
            <header>
                <Header />
            </header>

            <main>
                <BannerProfile  
                    name={data.nickname}
                    bio={data.description || '⚡ Foco, visão e propósito'} 
                    following={data.followingCount || 0}
                    follows={data.followersCount || 0}
                    bubbles={data.bubbleCount || 0}
                    nickName={data.username ? `@${data.username}` : '@user'}
                    photoProfile={photoProfile}
                    banner={banner}
                />
                
                <section className='menuBubbleRecommended'>
                    <BubbleRecommended nameBubble={"jogo"} imgBubble={imgBubble} />
                    <BubbleRecommended nameBubble={"jogo"} imgBubble={imgBubble} />
                    <BubbleRecommended nameBubble={"jogo"} imgBubble={imgBubble} />
                    <BubbleRecommended nameBubble={"jogo"} imgBubble={imgBubble} />
                    <BubbleRecommended nameBubble={"jogo"} imgBubble={imgBubble} />
                </section>

                <section className='menuPerfil'>
                    <span className='abasProfile menuPerfilSelected'>Post</span>
                    <span className='abasProfile'>Curtidas</span>
                    <span className='abasProfile'>Salvos</span>
                    <span className='abasProfile'>Privados</span>
                    <span className='abasProfile'>Historico</span>
                </section>

                <GridPost/>
            </main>
        </>
    )
}