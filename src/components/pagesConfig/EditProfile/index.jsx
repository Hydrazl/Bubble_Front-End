import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faImage, faUser } from "@fortawesome/free-solid-svg-icons";
import "./editprofile.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function EditProfile() {
  const token = localStorage.getItem("token");
  const userId = JSON.parse(atob(token.split(".")[1])).id;

  const [profile, setProfile] = useState({
    nickname: "",
    username: "",
    description: "",
    banner: "",
    profilePic: ""
  });

  const [bannerFile, setBannerFile] = useState(null);
  const [profilePicFile, setProfilePicFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await axios.get(`${API_URL}/profile`, {
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
      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
      }
    }

    fetchProfile();
  }, [token]);

  async function handleSave() {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("nickname", profile.nickname);
      formData.append("username", profile.username);
      formData.append("description", profile.description);

      if (bannerFile) formData.append("banner", bannerFile);
      if (profilePicFile) formData.append("profilePic", profilePicFile);

      await axios.put(`${API_URL}/profile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      });
      
      alert("Perfil atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro ao atualizar perfil.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="containerSettings">
      <div className="settingsHeader">
        <h1>Editar Perfil</h1>
        <p>Personalize suas informações e aparência</p>
      </div>

      {/* Banner Section */}
      <div className="settingsCard">
        <div className="cardHeader">
          <div className="cardTitle">
            <FontAwesomeIcon icon={faImage} />
            <h2>Banner do Perfil</h2>
          </div>
          <span className="cardDescription">Imagem de capa (recomendado: 1500x500px)</span>
        </div>
        
        <div className="bannerContainer">
          <div className="bannerPreview">
            <img
              src={bannerFile ? URL.createObjectURL(bannerFile) : (profile.banner || "https://via.placeholder.com/1500x500/1c294b/ffffff?text=Sem+Banner")}
              alt="banner"
            />
            <label className="editOverlay">
              <FontAwesomeIcon icon={faPenToSquare} />
              <span>Alterar Banner</span>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => setBannerFile(e.target.files[0])}
              />
            </label>
          </div>
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="settingsCard">
        <div className="cardHeader">
          <div className="cardTitle">
            <FontAwesomeIcon icon={faUser} />
            <h2>Informações do Perfil</h2>
          </div>
        </div>

        <div className="twoColumnGrid">
          {/* Profile Picture */}
          <div className="profilePictureSection">
            <label className="inputLabel">Foto de Perfil</label>
            <div className="profilePictureGrid">
              <div className="profilePreview square">
                <img
                  src={profilePicFile ? URL.createObjectURL(profilePicFile) : (profile.profilePic || "https://via.placeholder.com/150/1c294b/ffffff?text=User")}
                  alt="profile square"
                />
              </div>
              
              <div className="profilePreview circle">
                <img
                  src={profilePicFile ? URL.createObjectURL(profilePicFile) : (profile.profilePic || "https://via.placeholder.com/150/1c294b/ffffff?text=User")}
                  alt="profile circle"
                />
              </div>

              <label className="uploadButton">
                <FontAwesomeIcon icon={faPenToSquare} />
                <span>Alterar Foto</span>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => setProfilePicFile(e.target.files[0])}
                />
              </label>
            </div>
            <span className="inputHelper">Visualização: quadrada e circular</span>
          </div>

          {/* Name and Username */}
          <div className="inputGroup">
            <div className="inputField">
              <label className="inputLabel">Nome de Exibição</label>
              <input
                type="text"
                value={profile.nickname}
                onChange={(e) => setProfile({ ...profile, nickname: e.target.value })}
                className="styledInput"
                placeholder="Seu nome"
              />
            </div>

            <div className="inputField">
              <label className="inputLabel">Nome de Usuário</label>
              <div className="inputWithPrefix">
                <span className="inputPrefix">@</span>
                <input
                  type="text"
                  value={profile.username}
                  onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                  className="styledInput withPrefix"
                  placeholder="username"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="inputField">
          <label className="inputLabel">
            Biografia
            <span className="charCount">{profile.description.length}/200</span>
          </label>
          <textarea
            value={profile.description}
            onChange={(e) => setProfile({ ...profile, description: e.target.value })}
            className="styledTextarea"
            maxLength={200}
            placeholder="Conte um pouco sobre você..."
            rows={4}
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="settingsActions">
        <button 
          className="saveButton" 
          onClick={handleSave}
          disabled={loading}
        >
          {loading ? "Salvando..." : "Salvar Alterações"}
        </button>
      </div>
    </div>
  );
}