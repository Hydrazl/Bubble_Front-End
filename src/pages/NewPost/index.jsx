import "./NewPost.css"
import Header from "../../components/Header";
import { GoPlus } from "react-icons/go";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faComments, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import Like from "../../components/LikeButton";
import ProfilePic from '../..//assets/tl.png'
import Silksong from '../../assets/post1.jpeg'

function NewPost() {
    return (
        <>
            <Header />

            <main>
                <h1 className="titlenewpost">New Post</h1>

                <section className="inputsnewpost">

                   <div className="conteiner-title"> 

                    <textarea placeholder="Bublique algo... Como foi o seu dia?..." className="inputcommets"/>
                   </div>

                   <div className="conteiner-infoadd">
                      
                    <div className="divprofiles">
                        <h2>Marcar pessoas (Opcional)</h2>
                        <input type="text" placeholder="Digite o @ da pessoa" className="inputinfo"/>
                    </div>

                    <div className="divLocal">
                        <h2>Localização (Opcional)</h2>
                        <input type="text" placeholder="Adicionar Local" className="inputinfo"/>
                    </div>

                   </div>

                   <div className="imgPost">
                        <h2>Imagens</h2>

                        <div className="addImg">
                            <div className="buttonAddImg">
                                <GoPlus className="iconAdd"/>
                            </div>
                        </div>
                   </div>

                </section>
            </main>

            <aside className="conteinerPreview">

                <h2>Prévia</h2>

            <div className='conteinerProfilePreview'>

                <div className="profileelements">
                    <img src={ProfilePic}/>
                  <div className="textprofile">
                    <span>Lukas_kkj</span>
                    <span className="text-sm">@Lucas213</span>
                  </div>
                </div>

            <div className='conteinerPostPreview'>

                <div className='text-post'>
                    <p className='titulo-post'>Ola poggers</p>
                </div>

                <div className='midiaPostPreview'>
                    <img src={Silksong}/>
                </div>
            </div>

                <div className='displayLikePreview'>

                    <div className='like'>
                        <Like/>
                        <h3 className='num-like'>00</h3>
                    </div>

                    <div className='comentsPreview'>
                        <FontAwesomeIcon icon={faComments} className='coment'/>
                        <h3 className='num-coments'>00</h3>
                    </div>

                    <div className='inputComentsPreview'>
                        <input placeholder='Comente algo!!!'></input>
                    </div>

                    <div className='share'>
                        <FontAwesomeIcon icon={faShareNodes} className="shareicon"/>
                    </div>

                </div>

            
           </div> 
            
            <div className="conteinerPublicar">

                <div className="ButtonsPublicar">
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
