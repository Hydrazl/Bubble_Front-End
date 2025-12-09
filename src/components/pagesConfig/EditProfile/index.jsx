import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faSave } from "@fortawesome/free-solid-svg-icons";
import { LuCamera, LuUpload } from "react-icons/lu";
import "./EditProfile.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function EditProfile() {
  const token = localStorage.getItem("token");
  const userId = token ? JSON.parse(atob(token.split(".")[1])).id : null;

  const [profile, setProfile] = useState({
    nickname: "",
    username: "",
    description: "",
    banner: "",
    profilePic: ""
  });

  const [bannerFile, setBannerFile] = useState(null);
  const [profilePicFile, setProfilePicFile] = useState(null);

  // Preview states
  const [bannerPreview, setBannerPreview] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);

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
          banner: data.banner || "",
          profilePic: data.profilePic || ""
        });

        // Initial previews from existing data
        if (data.banner) setBannerPreview(`${API_URL}/${data.banner}`);
        if (data.profilePic) setProfilePreview(`${API_URL}/${data.profilePic}`);

      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
      }
    }

    if (token) fetchProfile();
  }, [token]);

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'profile') {
          setProfilePicFile(file);
          setProfilePreview(reader.result);
        } else if (type === 'banner') {
          setBannerFile(file);
          setBannerPreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  async function handleSave() {
    if (!profile.nickname.trim()) {
      alert("O nome de exibição é obrigatório.");
      return;
    }

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
    <div className="ep-container">

      {/* Left Column: Form */}
      <div className="ep-form-section">
        <div className="ep-header-section">
          <h1>Editar Perfil</h1>
          <p>Personalize suas informações e aparência</p>
        </div>

        <div className="ep-input-group">
          {/* Nickname Input */}
          <div className="ep-input-field">
            <label className="ep-label" htmlFor="nickname">Nome de Exibição</label>
            <input
              type="text"
              id="nickname"
              className="ep-input"
              value={profile.nickname}
              onChange={(e) => setProfile({ ...profile, nickname: e.target.value })}
              placeholder="Digite o seu nome de exibição"
            />
          </div>

          {/* Profile Pic Input */}
          <div className="ep-input-field">
            <label className="ep-label">Foto de Perfil</label>
            <label htmlFor="profilePic" className="ep-photo-input">
              <LuCamera size={20} />
              <span>Escolher Foto</span>
            </label>
            <input
              type="file"
              id="profilePic"
              accept="image/*"
              hidden
              onChange={(e) => handleFileChange(e, 'profile')}
            />
          </div>

          {/* Banner Input */}
          <div className="ep-input-field">
            <label className="ep-label">Banner</label>
            <label htmlFor="banner" className="ep-banner-input">
              <LuUpload size={24} className="text-gray-500" />
              <span>Clique para fazer upload</span>
              <span className="text-xs text-gray-400 mt-1">PNG, JPG até 10MB</span>
            </label>
            <input
              type="file"
              id="banner"
              accept="image/*"
              hidden
              onChange={(e) => handleFileChange(e, 'banner')}
            />
          </div>

          {/* Description Input */}
          <div className="ep-input-field">
            <label className="ep-label" htmlFor="description">Descrição</label>
            <textarea
              id="description"
              className="ep-textarea"
              maxLength={150}
              value={profile.description}
              onChange={(e) => setProfile({ ...profile, description: e.target.value })}
              placeholder="Conte um pouco sobre você..."
              rows={4}
            />
            <small className="ep-char-count">{profile.description.length}/150</small>
          </div>
        </div>

        <button
          className="ep-save-button"
          onClick={handleSave}
          disabled={loading}
        >
          {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : <FontAwesomeIcon icon={faSave} />}
          <span>{loading ? "Salvando..." : "Salvar Alterações"}</span>
        </button>
      </div>

      {/* Right Column: Live Preview */}
      <div className="ep-preview-section">
        <div className="ep-header-section">
          <h1>Pré-visualização</h1>
        </div>

        <div className="ep-preview-card">
          {/* Banner */}
          <div className="ep-preview-banner">
            {bannerPreview ? (
              <img src={bannerPreview} alt="Banner Preview" />
            ) : (
              <div className="ep-preview-banner-placeholder">
                <LuUpload size={32} />
                <span>Sem banner</span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="ep-preview-info">
            <div className="ep-preview-avatar">
              {profilePreview ? (
                <img src={profilePreview} alt="Profile Preview" />
              ) : (
                <div className="ep-preview-avatar-placeholder">
                  <LuCamera size={24} />
                </div>
              )}
            </div>

            <div className="ep-preview-details">
              <h2>{profile.nickname || "Seu Nome"}</h2>
              <h6>@{profile.username || "username"}</h6>

              <div className="ep-preview-bio">
                <span className="ep-preview-bio-label">Bio:</span>
                <p>{profile.description || "Sua biografia aparecerá aqui..."}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}