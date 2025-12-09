// src/components/Popup/index.jsx
import './popUp.css';

import Commets from '../CommetsGeral';
import { useState, useEffect } from "react";

export default function Popup({ fechar, post }) {
  // proteção: se post for undefined (por segurança)
  if (!post) return null;

  const { name, id, url_image_perfil, url_image_post, description, postId } = post;
  const backendURL = import.meta.env.VITE_API_URL;

  const [comments, setComments] = useState([]);


  useEffect(() => {
    if (!postId) return;

    let mounted = true;
    fetch(`${backendURL}/comments/${postId}`)
      .then(res => res.json())
      .then(data => {
        if (mounted) setComments(Array.isArray(data) ? data : []);
      })
      .catch(err => {
        console.error("Erro ao buscar comentários:", err);
        if (mounted) setComments([]);
      });

    return () => { mounted = false; };
  }, [postId, backendURL]);

  useEffect(() => {
    function handleNewComment(e) {
      const { postId: evtPostId, comment } = e.detail || {};
      if (evtPostId === postId) {

        setComments(prev => [comment, ...prev]);
      }
    }

    window.addEventListener('commentCreated', handleNewComment);
    return () => window.removeEventListener('commentCreated', handleNewComment);
  }, [postId]);

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={fechar}>X</button>

        <section className="post-dentro-popup">
          <div className="perfil">
            <img src={url_image_perfil} alt={`${name} profile`} />
            <div>
              <h2>{name}</h2>
              <p>@{id}</p>
            </div>
          </div>

        <div className='conteinerCommentsPost'>
          <p>{description}</p>
        </div>

          <div className='conteiner-img'>
            {url_image_post ? (
              <img src={url_image_post} className="midia" alt="post media" />
             ) : null}
          </div>
        </section>

        <main>
          <section className='Coments'>
            {comments.length === 0 && <p>Nenhum comentário ainda.</p>}
            {comments.map(c => (
                <Commets
                    key={c.id}
                    imgProfile={c.author?.profilePic}
                    NameProfile={c.author?.username || 'usuário'}
                    CommetsTextContent={c.content}
                    like_num={0}
                    com_num={0}
                />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
