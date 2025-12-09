import './Post.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faShareNodes, faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import LikeButton from '../LikeButton';
import { useState, useEffect } from "react";
import Popup from "../Popup";
import PopupShared from '../PopupShared';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';



export default function Post({
  name, id, postId, userId, description, url_image_perfil,
  url_image_post, like_num, com_num, onDelete, initialLiked = false
}) {

  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupshared, setOpenshared] = useState(false);
  const backendURL = import.meta.env.VITE_API_URL;

  const [likesCount, setLikesCount] = useState(like_num);
  const [isLiked, setIsLiked] = useState(initialLiked);

  const [commentText, setCommentText] = useState("");


  useEffect(() => {
    if (openPopupshared) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
  }, [openPopupshared]);

  useEffect(() => {
    if (openPopup) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
  }, [openPopup]);

  useEffect(() => {
    setLikesCount(like_num);
  }, [like_num]);

  const { user } = useAuth();
  const userStorage = localStorage.getItem('user');
  const adminStorage = localStorage.getItem('admin');
  const userParsed = userStorage ? JSON.parse(userStorage) : null;

  const isAdmin = user?.admin || adminStorage === true || userParsed?.admin === true;
  const currentUserId = user?.id || userParsed?.id;

  const handleLikeChange = (likeData) => {
    if (likeData.likesCount !== undefined) {
      setLikesCount(likeData.likesCount);
    } else if (likeData.liked !== undefined) {
      setLikesCount((prev) => (likeData.liked ? prev + 1 : prev - 1));
    }
    setIsLiked(likeData.liked);
  };

  async function handleDeletePost() {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${backendURL}/home/${postId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (!response.ok) throw new Error('Erro ao tentar deletar post');
      if (onDelete) onDelete(postId);

    } catch (err) {
      console.log('Erro:', err);
    }
  }

async function sendComment() {
    if (!commentText.trim()) return;

    try {
        const token = localStorage.getItem('token');

        const response = await fetch(`${backendURL}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                postId,
                content: commentText
            })
        });

        const data = await response.json();


        setCommentText("");

        window.dispatchEvent(new CustomEvent('commentCreated', {
          detail: {
            postId,
            comment: {
              ...data,
              
              author: {
                id: (user && user.id) || null,
                username: (user && (user.username || userParsed?.username)) || null,
                profilePic: (user && user.profilePic) || null
              }
            }
          }
        }));


    } catch (err) {
        console.error("Erro ao enviar comentário:", err);
    }
}


  return (
    <>
      <section className='conteiner-post'>
        <div className='conteiner-perfil'>
          <div
            className='ft-perfil'
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/profile/${userId}`);
            }}
            style={{ cursor: 'pointer' }}
          >
            <img src={url_image_perfil} alt='perfil' />
          </div>

          <div className='nome-perfil'>
            <h2>{name}</h2>
            <p className='arroba-perfil'>@{id}</p>
          </div>
        </div>

        {(isAdmin === true || currentUserId === userId) && (
          <div>

       
            <div
              className="edit-post cursor-pointer"
              onClick={() => navigate(`/newpost?edit=${postId}`)}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </div>

          
            <div
              className="delete-post cursor-pointer"
              onClick={handleDeletePost}
            >
              <FontAwesomeIcon icon={faTrash} />
            </div>

          </div>
        )}

        <div className='conteudo-post'>
          <div className='text-post'>
            <p className='titulo-post'>{description}</p>
          </div>

          {url_image_post && (
            <div className='midia-post'>
              <img src={url_image_post} alt='post' />
            </div>
          )}

          <div className='display-like'>
            <div className='like'>
              <h3 className='num-like'>{likesCount}</h3>
              <LikeButton
                postId={postId}
                initialLiked={initialLiked}
                onLikeChange={handleLikeChange}
                initialCount={like_num}
              />
            </div>

            <div
              className='coments'
              onClick={() => setOpenPopup(true)}
              style={{ cursor: "pointer" }}
            >
              <h3 className='num-coments'>{com_num}</h3>
              <FontAwesomeIcon icon={faComments} className='coment' />
            </div>

            <input
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              onKeyDown={(e) => {
              if (e.key === "Enter") sendComment();
              }}
              placeholder="Comente algo!!!"
              className='pero-insput-coments'
            />


            <div
              className='share'
              onClick={() => setOpenshared(true)}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faShareNodes} />
            </div>
          </div>
        </div>
      </section>

      {openPopup && (
        <Popup
          fechar={() => setOpenPopup(false)}
          post={{ name, id, url_image_perfil, url_image_post, description, postId }}
        />
      )}


      {openPopupshared && (
        <PopupShared fechar={() => setOpenshared(false)} />
      )}
    </>
  );
}
