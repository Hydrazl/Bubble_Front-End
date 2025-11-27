import './Post.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faShareNodes, faTrash } from "@fortawesome/free-solid-svg-icons";

import LikeButton from '../LikeButton';
import { useState, useEffect } from "react";
import Popup from "../Popup";
import PopupShared from '../PopupShared';
import axios from "axios";

export default function Post({
  idPost,      
  userIdPost,  
  name,
  id,
  description,
  url_image_perfil,
  url_image_post,
  like_num,
  com_num,
  onDelete     //  função do pai para remover da tela 
  //esses tres comentarios são do chatgpt, não entendi oque ela faz direito
}) {

  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupshared, setOpenshared] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));   // usuário ta vivo
  const token = localStorage.getItem("token");

  // Deleta o post
  async function deletePost() {
    if (!window.confirm("Tem certeza que deseja excluir este post?")) return;

    try {
      await axios.delete(`http://localhost:3000/posts/${idPost}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (onDelete) onDelete(idPost); // remove da lista do componente pai

      alert("Post deletado!");
    } catch (err) {
      console.error("Erro ao deletar:", err);
      alert("Erro ao excluir post!");
    }
  }

  useEffect(() => {
    if (openPopupshared || openPopup) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [openPopupshared, openPopup]);

  return (
    <>
      <section className='conteiner-post'>
        <div className='conteiner-perfil'>

          <div className='ft-perfil'>
            <img src={url_image_perfil} alt='perfil'/>
          </div>

          <div className='nome-perfil'>
            <h2>{name}</h2>
            <p className='arroba-perfil'>{id}</p>
          </div>

          {/* para mostrar o botao de deletar so se for admin ou o user criador do post */}
          {user && (user.id === userIdPost || user.admin === true) && (
            <button className="btn-delete" onClick={deletePost}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          )}

        </div>

        <div className='conteudo-post'>
          <div className='text-post'>
            <p className='titulo-post'>{description}</p>
          </div>

          <div className='midia-post'>
            <img src={url_image_post} alt='post'/>
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
              <FontAwesomeIcon icon={faComments} className='coment'/>
            </div>

            <div className='input-coments'>
              <input placeholder='Comente algo!!!' className='pero-insput-coments' />
            </div>

            <div className='share'
              onClick={()=> setOpenshared(true)}
              style={{cursor:"pointer"}}
            >
              <FontAwesomeIcon icon={faShareNodes}/>
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
        <PopupShared fechar={() => setOpenshared(false)}/>
      )}

    </>
  );
}
