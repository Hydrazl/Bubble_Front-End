
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
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

useEffect(() => {
  async function fetchProfile() {
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
  }

  fetchProfile();
}, [token]);

  async function handleSave() {
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
    alert("Perfil atualizado.");
  }

  return (
    <div className="conteinerSetings">
      <div className="conteinerEditinfoPrin">
        <div className="editTextNames">
          <div className="yourName">
            <h3>Seu nome</h3>
            <input
              value={profile.nickname}
              onChange={(e) => setProfile({ ...profile, nickname: e.target.value })}
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
            <img
              src={bannerFile ? URL.createObjectURL(bannerFile) : (profile.banner || "https://via.placeholder.com/600x200")}
              alt="banner"
            />
            <label>
              <FontAwesomeIcon icon={faPenToSquare} className="editIcon" />
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

      <div className="conteinerEditInfoSencu">
        <div className="yourBio">
          <h3>Bio</h3>
          <textarea
            value={profile.description}
            onChange={(e) => setProfile({ ...profile, description: e.target.value })}
            className="bioTextArea"
            maxLength={200}
          />
        </div>

        <div className="editPhotoProfile">
          <h3>Sua foto de perfil</h3>
          <div className="photosConteiner">

            <img
              src={profilePicFile ? URL.createObjectURL(profilePicFile) : (profile.profilePic || "https://via.placeholder.com/150")}
              className="photoProfileSquare"
              alt="profile"
            />

            <img
              src={profilePicFile ? URL.createObjectURL(profilePicFile) : (profile.profilePic || "https://via.placeholder.com/150")}
              className="photoProfileBall"
              alt="profile"
            />

            <label>
              <FontAwesomeIcon icon={faPenToSquare} className="editIcon" />
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => setProfilePicFile(e.target.files[0])}
              />
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
