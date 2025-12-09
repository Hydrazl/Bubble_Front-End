import { useEffect, useState } from 'react';
import axios from 'axios';
import './asideBorbulhando.css';
import place from '../../assets/place.jpg';

export default function AsideBorbulhando() {
  const [topUsers, setTopUsers] = useState([]);
  const [topPosts, setTopPosts] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    // Ajuste baseURL se seu backend rodar em outra porta
    const api = axios.create({ baseURL: 'http://localhost:4000' });

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
  }, []);

  function avatarOrPlaceholder(url) {
    if (!url) return place;
    // se o backend expõe '/uploads/...' já vai estar completo
    return url.startsWith('http') ? url : `http://localhost:3000${url}`;
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
              <div className='row' key={p.id}>
                <span className='index'>{i+1}</span>
                <span className='label'>{p.title}</span>
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
                <img src={avatarOrPlaceholder(u.profilePic)} className='avatar' alt={u.username}/>
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
