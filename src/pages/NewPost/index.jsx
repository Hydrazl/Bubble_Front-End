import "./NewPost.css";
import Header from "../../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import Like from "../../components/LikeButton";
import ProfilePic from "../../assets/tl.png";
import ImgUpload from "./ImgUpload";
import { useState } from "react";
import { usePosts } from "../../context/PostContext";

function NewPost() {
  const [postText, setPostText] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const { addPost } = usePosts();

  function handleSelectedImage(file) {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImagePreviewUrl(url);
  }

  function handlePublish() {
    const newPost = {
      author: "Lukas_kkj",
      userTag: "@Lucas213",
      text: postText,
      image: imagePreviewUrl,
      likes: 0,
      comments: 0,
      createdAt: new Date(),
    };

    addPost(newPost);
    window.location.href = "/";
  }

  return (
    <>
      <Header />

      <main>
        <h1 className="titlenewpost">New Post</h1>

        <section className="inputsnewpost">
          
          <div className="conteiner-title">
            <textarea
              placeholder="Bublique algo... Como foi o seu dia?..."
              className="inputcommets"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />
          </div>

          <div className="conteiner-infoadd">
            <div className="divprofiles">
              <h2>Marcar pessoas (Opcional)</h2>
              <input
                type="text"
                placeholder="Digite o @ da pessoa"
                className="inputinfo"
              />
            </div>

            <div className="divLocal">
              <h2>Localização (Opcional)</h2>
              <input
                type="text"
                placeholder="Adicionar Local"
                className="inputinfo"
              />
            </div>
          </div>

          <div className="imgPost">
            <ImgUpload onSelect={handleSelectedImage} />
          </div>

        </section>
      </main>

      <aside className="conteinerPreview">
        <h2>Prévia</h2>

        <div className="conteinerProfilePreview">
          <div className="profileelements">
            <img src={ProfilePic} alt="profile" />
            <div className="textprofile">
              <span>Lukas_kkj</span>
              <span className="text-sm">@Lucas213</span>
            </div>
          </div>

          <div className="conteinerPostPreview">

            <div className="text-post">
              <p className="titulo-post">
                {postText || "O que você escrever aqui aparecerá na prévia..."}
              </p>
            </div>

            <div className="midiaPostPreview">
              {imagePreviewUrl ? (
                <img src={imagePreviewUrl} alt="preview" />
              ) : (
                <div className="placeholder-image"></div>
              )}
            </div>

          </div>

          <div className="displayLikePreview">
            <div className="like">
              <Like />
              <h3 className="num-like">00</h3>
            </div>

            <div className="comentsPreview">
              <FontAwesomeIcon icon={faComments} className="coment" />
              <h3 className="num-coments">00</h3>
            </div>

            <div className="inputComentsPreview">
              <input placeholder="Comente algo!!!" />
            </div>

            <div className="share">
              <FontAwesomeIcon icon={faShareNodes} className="shareicon" />
            </div>
          </div>
        </div>

        <div className="conteinerPublicar">
          <div className="ButtonsPublicar" onClick={handlePublish}>
            <span>Publicar</span>
          </div>

          <div className="ButtonCancel">
            <span>Cancelar</span>
          </div>
        </div>

      </aside>
    </>
  );
}

export default NewPost;
