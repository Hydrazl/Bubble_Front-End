import { useEffect, useState } from 'react';
import axios from 'axios';
import './asideBorbulhando.css';

export default function AsideBorbulhando() {
  const [topUsers, setTopUsers] = useState([]);
  const [topPosts, setTopPosts] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

  useEffect(() => {
    const api = axios.create({ baseURL: API_URL });

    let cancelled = false;

    (async () => {
      try {
        const [uRes, pRes] = await Promise.all([
          api.get('/trending/users'),
          api.get('/trending/posts')
        ]);
        if (cancelled) return;
        setTopUsers(uRes.data || []);
        setTopPosts(pRes.data || []);
      } catch (err) {
        console.error('Erro ao buscar trending:', err);
      } finally {
        if (!cancelled) {
          setLoadingUsers(false);
          setLoadingPosts(false);
        }
      }
    })();

    return () => { cancelled = true; };
  }, [API_URL]);

  function avatarOrPlaceholder(url) {
    if (!url) return 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png';
    
    if (url.startsWith('http')) return url;

    // Remove leading slash if present to avoid double slashes when joining
    const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
    
    // If it's just a filename (common in this app), assume it needs /uploads/ or just base depending on how it's stored
    // Based on Feed component: `${API_URL}/${post.author.profilePic}`
    return `${API_URL}/${cleanUrl}`;
  }

  return (
    <aside className='aside'>
      <div className='searchBox'>
        <input type="text" placeholder="Buscar na Bubble..." />
      </div>

      <section className='card trending'>
        <h3>Borbulhos</h3>
        <div className='list scrollable'>
          {loadingPosts ? (
            <div className='row'>Carregando...</div>
          ) : topPosts.length === 0 ? (
            <div className='row'>Nenhum post encontrado</div>
          ) : (
            topPosts.map((p, i) => (
              <div className='row post' key={p.id}>
                <span className='index'>{i+1}</span>
                {p.media && (
                  <img 
                    src={`${API_URL}/uploads/users/${p.media}`} 
                    className='post-thumb' 
                    alt="Post media" 
                    onError={(e) => e.target.style.display = 'none'}
                  />
                )}
                {/* Posts usually have 'description', not 'title' */}
                <span className='label' style={{
                  whiteSpace: 'nowrap', 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis', 
                  maxWidth: p.media ? '140px' : '180px',
                  display: 'inline-block'
                }}>
                  {p.description || "Sem descrição"}
                </span>
              </div>
            ))
          )}
        </div>
      </section>

      <section className='card'>
        <h3>Top Users</h3>
        <div className='list'>
          {loadingUsers ? (
            <div className='row'>Carregando...</div>
          ) : topUsers.length === 0 ? (
            <div className='row'>Nenhum usuário</div>
          ) : (
            topUsers.map((u, idx) => (
              <div className='row user' key={u.id}>
                <span className='index'>{idx + 1}</span>
                {/* Users from /trending/users likely aren't wrapped in 'author' */}
                <img 
                  src={avatarOrPlaceholder(u.profilePic || u.author?.profilePic)} 
                  className='avatar' 
                  alt={u.username}
                />
                <a className='label' href={`/profile/${u.username}`}>@{u.username}</a>
                <span style={{marginLeft:'8px', fontSize:'0.8em', color:'#666'}}>
                  • {u.followersCount ?? 0}
                </span>
              </div>
            ))
          )}
        </div>
      </section>

      <section className='card'>
        <h3>Top Bubbles</h3>
        <div className='list'>
          <div className='row'>
            <span className='label'>Em breve — seção de Bolhas</span>
          </div>
        </div>
      </section>
    </aside>
  );
}
