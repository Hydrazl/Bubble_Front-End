import "./NewPost.css";
import Header from "../../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import Like from "../../components/LikeButton";
import ProfilePic from "../../assets/tl.png";
import ImgUpload from "./ImgUpload";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function NewPost() {
  const [postText, setPostText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [bubbleId, setBubbleId] = useState("");

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const editId = searchParams.get("edit");

  const user = JSON.parse(localStorage.getItem("user")) || null;
  const backendURL = import.meta.env.VITE_API_URL;

  const profileImage =
    user?.profilePic && !user.profilePic.startsWith("http")
      ? `${backendURL}/${user.profilePic}`
      : user?.profilePic || ProfilePic;

  useEffect(() => {
    if (!editId) return;

    async function fetchPost() {
      try {
        const res = await fetch(`${backendURL}/api/posts/${editId}`);
        const data = await res.json();

        setPostText(data.description || "");
        setBubbleId(data.bubbleId || "");

        if (data.media) {
          const fullImage = data.media.startsWith("http")
            ? data.media
            : `${backendURL}/${data.media}`;
          setImagePreviewUrl(fullImage);
        }
      } catch (error) {
        console.log("Erro ao carregar post:", error);
      }
    }

    fetchPost();
  }, [editId]);

  function handleSelectedImage(file) {
    if (!file) return;
    setSelectedImage(file);
    setImagePreviewUrl(URL.createObjectURL(file));
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
    formData.append("bubbleId", bubbleId);

    if (selectedImage) {
      formData.append("postImage", selectedImage);
    }

    const url = editId
      ? `${backendURL}/api/posts/${editId}`
      : `${backendURL}/api/posts`;

    const method = editId ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Erro ao criar/editar post.");
        return;
      }

      navigate("/home");
    } catch (error) {
      alert("Erro no servidor.");
    }
  }

  return (
    <>
      <Header />

      <main className="mainNewPost">
        <h1 className="titlenewpost">
          {editId ? "Editar Post" : "Novo Post"}
        </h1>

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
              <h2>Marcar pessoas (opcional)</h2>
              <input
                type="text"
                placeholder="Digite o @ da pessoa"
                className="inputinfo"
              />
            </div>

            <div className="divLocal">
              <h2>Localização (opcional)</h2>
              <input
                type="text"
                placeholder="Adicionar Local"
                className="inputinfo"
              />
            </div>

            <div className="divBubbleSelect">
              <h2>Escolher Bolha</h2>

              <select
                className="bubbleSelect"
                value={bubbleId}
                onChange={(e) => setBubbleId(e.target.value)}
              >
                <option value="">Selecione uma bolha...</option>
                <option value="1">Tecnologia</option>
                <option value="2">Fotografia</option>
                <option value="3">Games</option>
                <option value="4">Esportes</option>
              </select>
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
              <span className="text-sm">@{user?.username || "you"}</span>
            </div>
          </div>

          <div className="conteinerPostPreview">
            <div className="text-post">
              <p className="titulo-post">
                {postText ||
                  "O que você escrever aqui aparecerá na prévia..."}
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
            <span>{editId ? "Salvar Alterações" : "Publicar"}</span>
          </div>

          <div className="ButtonCancel">
            <span onClick={() => navigate("/home")}>Cancelar</span>
          </div>
        </div>
      </aside>
    </>
  );
}

export default NewPost;
