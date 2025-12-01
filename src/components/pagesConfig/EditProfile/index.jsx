import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./editprofile.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function EditProfile() {

  const token = localStorage.getItem("token");

  // PEGAR O ID DO USUÁRIO DO TOKEN DECODIFICADO
  const userId = JSON.parse(atob(token.split(".")[1])).id;

  const [profile, setProfile] = useState({
    nickname: "",
    username: "",
    description: "",
    banner: "",
    profilePic: ""
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function fetchProfile() {
      try {

        const res = await axios.get(`${API_URL}/profile/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        const data = res.data;

        setProfile({
          nickname: data.nickname || "",
          username: data.username || "",
          description: data.description || "",
          banner: data.banner ? `${API_URL}/${data.banner}` : "",
          profilePic: data.profilePic ? `${API_URL}/${data.profilePic}` : ""
        });

      } catch (err) {
        console.error("Erro ao carregar perfil:", err);
        setError("Não foi possível carregar os dados do perfil.");
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();

  }, [userId, token]);

  async function handleSave() {
    try {
      await axios.put(
        `${API_URL}/profile/${userId}`,
        {
          nickname: profile.nickname,
          username: profile.username,
          description: profile.description
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      alert("Perfil atualizado com sucesso.");

    } catch (err) {
      console.error("Erro ao atualizar perfil:", err);
      alert("Falha ao atualizar perfil");
    }
  }

  if (loading) return <div className="text-white p-6">Carregando...</div>;
  if (error) return <div className="text-red-500 p-6">{error}</div>;

  return (
    <div className="conteinerSetings">
      <div className="conteinerEditinfoPrin">
        <div className="editTextNames">

          <div className="yourName">
            <h3>Seu nome</h3>
            <input
              value={profile.nickname}
              onChange={(e) =>
                setProfile({ ...profile, nickname: e.target.value })
              }
              className="inputText"
            />
          </div>

          <div className="yourUsername">
            <h3>Seu @</h3>
            <input
              value={profile.username}
              onChange={(e) =>
                setProfile({ ...profile, username: e.target.value })
              }
              className="inputText"
            />
          </div>
        </div>

        <div className="editBanner">
          <h3>Banner</h3>
          <div className="bannerWrapper">
            <img
              src={profile.banner || "https://via.placeholder.com/600x200"}
              alt="banner"
            />
            <FontAwesomeIcon icon={faPenToSquare} className="editIcon" />
          </div>
        </div>
      </div>

      <div className="conteinerEditInfoSencu">
        <div className="yourBio">
          <h3>Bio</h3>
          <textarea
            value={profile.description}
            onChange={(e) =>
              setProfile({ ...profile, description: e.target.value })
            }
            className="bioTextArea"
            maxLength={200}
          />
        </div>

        <div className="editPhotoProfile">
          <h3>Sua foto de perfil</h3>
          <div className="photosConteiner">
            <img
              src={profile.profilePic || "https://via.placeholder.com/150"}
              className="photoProfileSquare"
              alt="profile square"
            />
            <img
              src={profile.profilePic || "https://via.placeholder.com/150"}
              className="photoProfileBall"
              alt="profile round"
            />
            <FontAwesomeIcon icon={faPenToSquare} className="editIcon" />
          </div>
        </div>
      </div>

      <button className="saveButton" onClick={handleSave}>
        Salvar alterações
      </button>
    </div>
  );
}
