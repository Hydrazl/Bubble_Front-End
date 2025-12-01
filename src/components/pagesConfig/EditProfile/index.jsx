import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import bannerFallback from "../../../assets/ocean.jpg";
import photoFallback from "../../../assets/meusegundo place.jpeg";
import "./editprofile.css";

export default function EditProfile() {
  const [profile, setProfile] = useState({
    name: "",
    username: "",
    bio: "",
    bannerUrl: "",
    photoUrl: "",
  });

  const [loading, setLoading] = useState(true);

  // 🔹 Carrega dados iniciais do perfil
  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("/api/profile");
        const data = await res.json();
        setProfile({
          name: data.name || "",
          username: data.username || "",
          bio: data.bio || "",
          bannerUrl: data.bannerUrl || "",
          photoUrl: data.photoUrl || "",
        });
      } catch (err) {
        console.error("Erro ao carregar perfil", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  // 🔹 Manipula troca da imagem (banner ou foto)
  function handleImageChange(e, type) {
    const file = e.target.files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);

    setProfile((prev) => ({
      ...prev,
      [type]: previewUrl,
    }));

    // 🔹 Guarda o próprio arquivo para envio posterior ao backend
    setFiles((prev) => ({ ...prev, [type]: file }));
  }

  // 🔹 Guarda arquivos reais para envio ao backend
  const [files, setFiles] = useState({
    bannerUrl: null,
    photoUrl: null,
  });

  // 🔹 Atualiza perfil no backend (texto + arquivos) — BACKEND virá depois
  async function handleSave() {
    try {
      const formData = new FormData();

      formData.append("name", profile.name);
      formData.append("username", profile.username);
      formData.append("bio", profile.bio);

      if (files.bannerUrl) formData.append("banner", files.bannerUrl);
      if (files.photoUrl) formData.append("photo", files.photoUrl);

      await fetch("/api/profile", {
        method: "PUT",
        body: formData,
      });

      alert("Perfil atualizado com sucesso.");
    } catch (err) {
      console.error("Falha ao atualizar perfil", err);
    }
  }

  if (loading) return <div className="text-white p-6">Carregando...</div>;

  return (
    <div className="conteinerSetings">
      <div className="conteinerEditinfoPrin">

        <div className="editTextNames">
          <div className="yourName">
            <h3>Seu nome</h3>
            <input
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="inputText"
            />
          </div>

          <div className="yourUsername">
            <h3>Seu @</h3>
            <input
              value={profile.username}
              onChange={(e) => setProfile({ ...profile, username: e.target.value })}
              className="inputText"
            />
          </div>
        </div>

        <div className="editBanner">
          <h3>Banner</h3>
          <div className="bannerWrapper">
            <img src={profile.bannerUrl || bannerFallback} alt="banner" />

  
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="bannerInput"
              onChange={(e) => handleImageChange(e, "bannerUrl")}
            />

            <label htmlFor="bannerInput">
              <FontAwesomeIcon icon={faPenToSquare} className="editIcon cursor-pointer" />
            </label>
          </div>
        </div>
      </div>


      <div className="conteinerEditInfoSencu">
        <div className="yourBio">
          <h3>Bio</h3>
          <textarea
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            className="bioTextArea"
            maxLength={200}
          />
        </div>

        <div className="editPhotoProfile">
          <h3>Sua foto de perfil</h3>
          <div className="photosConteiner">
            <img
              src={profile.photoUrl || photoFallback}
              className="photoProfileSquare"
              alt="profile square"
            />

            <img
              src={profile.photoUrl || photoFallback}
              className="photoProfileBall"
              alt="profile round"
            />

  
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="photoInput"
              onChange={(e) => handleImageChange(e, "photoUrl")}
            />

            <label htmlFor="photoInput">
              <FontAwesomeIcon icon={faPenToSquare} className="editIcon cursor-pointer" />
            </label>
          </div>
        </div>
      </div>


      <button className="saveButton" onClick={handleSave}>
        Salvar alterações
      </button>
    </div>
  );
}
