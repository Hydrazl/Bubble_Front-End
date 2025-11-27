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
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const { addPost } = usePosts();

  const user = JSON.parse(localStorage.getItem("user")) || null;
  const backendURL = "http://localhost:4000";
  
  const profileImage = user?.profilePic && !user.profilePic.startsWith("http") ? `${backendURL}/${user.profilePic}` : user?.profilePic || ProfilePic;

  function handleSelectedImage(file) {
    if (!file) return;
    setSelectedImage(file);
    const url = URL.createObjectURL(file);
    setImagePreviewUrl(url);
  }

  async function handlePublish() {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId") || (user && user.id);

    if (!token || !userId) {
      alert("Você não está logado!");
      return;
    }

    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("description", postText);

    if (selectedImage) {
      formData.append("postImage", selectedImage);
    }

    try {
      const req = await fetch("http://localhost:4000/posts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const resText = await req.text();

      let res;
      try {
        res = JSON.parse(resText);
      } catch (e) {
        console.error("Resposta inesperada do servidor:", resText);
        alert("Erro no servidor.");
        return;
      }

      if (!req.ok) {
        alert(res.message || "Erro ao criar post.");
        return;
      }

      // tudo certo
      window.location.href = "/home";
    } catch (error) {
      console.error("Erro no publish:", error);
      alert("Erro no servidor.");
    }
  }


  return (
    <>
      <Header />

      <main className="mainNewPost">
        <h1 className="titlenewpost">New Post</h1>

        <section className="inputsnewpost">
          <div className="conteiner-title">
            <textarea
              placeholder="Publique algo... Como foi o seu dia?..."
              className="inputcommets resize-none"
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
            <img src={profileImage} alt="profile" />
            <div className="textprofile">
              <span>{user?.nickname || "Seu nome"}</span>
              <span className="text-sm">@{user?.nickname || user?.nickname || "you"}</span>
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
                <div className="placeholder-image" />
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
