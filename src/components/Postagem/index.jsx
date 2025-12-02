import './Post.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faShareNodes, faTrash } from "@fortawesome/free-solid-svg-icons";
import LikeButton from '../LikeButton';
import { useState, useEffect } from "react";
import Popup from "../Popup";
import PopupShared from '../PopupShared'; // mesmo componente usado no GridPost
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

export default function Post({
  name, id, postId, userId, description, url_image_perfil,
  url_image_post, like_num, com_num, onDelete
}) {
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupshared, setOpenshared] = useState(false);
  const backendURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (openPopupshared) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [openPopupshared])

  useEffect(() => {
    if (openPopup) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [openPopup]);

  const { user } = useAuth();
  const userStorage = localStorage.getItem('user');
  const adminStorage = localStorage.getItem('admin');
  const userParsed = userStorage ? JSON.parse(userStorage) : null;
  const isAdmin = user?.admin || adminStorage === true || userParsed?.admin === true;
  const currentUserId = user?.id || userParsed?.id;
  console.log(user?.admin)

  // funcao pra deleta o post
  async function handleDeletePost() {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${backendURL}/home/${postId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });

    if (!response.ok) {
      throw new Error('Erro ao tentar deletar post');
    }

    if (onDelete) onDelete(postId);
  } catch (err) {
    console.log('Erro:', err);
  }
}

  return (
    <>
      <section className='conteiner-post'>
        <div className='conteiner-perfil'>
          <div className='ft-perfil'
            onClick={(e) => {
              e.stopPropagation();
              console.log('Clicou!');
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
        {/* Botão de deletar ta aqui jão */}
        {(isAdmin === true || currentUserId === userId) && (
          <div
            className='delete-post'
            onClick={() => {
              console.log('Clico apago')
              handleDeletePost();
            }}
            style={{ cursor: 'pointer' }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </div>
        )}

        <div className='conteudo-post'>
          <div className='text-post'>
            <p className='titulo-post'>{description}</p>
          </div>

          <div className='midia-post'>
            <img src={url_image_post} alt='post' />
          </div>

          <div className='display-like'>
            <div className='like'>
              <h3 className='num-like'>{like_num}</h3>
              <LikeButton />
            </div>

            <div
              className='coments'
              onClick={() => setOpenPopup(true)}
              style={{ cursor: "pointer" }}
            >
              <h3 className='num-coments'>{com_num}</h3>
              <FontAwesomeIcon icon={faComments} className='coment' />
            </div>

            <div className='input-coments'>
              <input placeholder='Comente algo!!!' className='pero-insput-coments' />
            </div>

            <div className='share'
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
          post={{
            name,
            id,
            url_image_perfil,
            url_image_post,
          }}
        />
      )}

      {openPopupshared && (
        <PopupShared fechar={() => setOpenshared(false)} />
      )}

    </>
  );
}