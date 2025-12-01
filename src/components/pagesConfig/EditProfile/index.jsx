import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import bannerFallback from "../../../assets/ocean.jpg";
import photoFallback from "../../../assets/meusegundo place.jpeg";
import "./editprofile.css";

<<<<<<< HEAD
export default function EditProfile() {
  const [profile, setProfile] = useState({
    name: "",
    username: "",
    bio: "",
    bannerUrl: "",
    photoUrl: "",
  });

  const [loading, setLoading] = useState(true);

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

  async function handleSave() {
    try {
      await fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
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
            <FontAwesomeIcon icon={faPenToSquare} className="editIcon" />
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
            <FontAwesomeIcon icon={faPenToSquare} className="editIcon" />
          </div>
        </div>
      </div>
=======
export default function EditProfile(){
    return(
        <>
            <div className='conteinerSetigns'>

                <div className='conteinerEditinfoPrin'>

                    <div className='editTextNames'>

                        <div className='yourName'>
                            <h3>Seu nome</h3>
                            <input placeholder="henri barki" className='inputText'></input>
                        </div>

                        <div className='yourUsername'>
                            <h3>Seu @</h3>
                            <input placeholder="@ronaldo" className='inputText'></input>
                        </div>
>>>>>>> e7ebb0949b2c376058c5680f5f295c781ae3244f

      <button className="saveButton" onClick={handleSave}>
        Salvar alterações
      </button>
    </div>
  );
}

<<<<<<< HEAD
=======
                    <div className='editBanner'>
                        <h3>Banner</h3>
                        <img src={banner}/>
                        <FontAwesomeIcon icon={faPenToSquare} className='text-white w-5 h-5'/>
                    </div>

                </div>

                <div className='conteinerEditInfoSencu'>

                    <div className='yourBio'>
                        <h3>Bio</h3>
                        <input placeholder='Deus fé e Familia'></input>
                    </div>

                    <div className='editPhotoProfile'>

                        <h3>Sua foto de perfil</h3>

                        <div className='photosConteiner'>
                            <img src={photoProfile} className='photoProfileSquare'></img>
                            <img src={photoProfile} className='photoProfileBall'></img>
                            <FontAwesomeIcon icon={faPenToSquare} className='text-white w-5 h-5'/>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
>>>>>>> e7ebb0949b2c376058c5680f5f295c781ae3244f
