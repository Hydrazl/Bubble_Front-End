import './Post.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faComments, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import ftPost from'../../assets/post-Yasmin.png'
import ftPerfil from '../../assets/Profile-picture.png'

export default function Post(){
    return(
        <section className='conteiner-post'>

            <div className='conteiner-perfil'>

                <div className='ft-perfil'>
                    <img src={ftPerfil} alt='perfil'/>
                </div>

                <div className='nome-perfil'>
                    <h2>Yasmin Ferreira</h2>
                    <p className='arroba-perfil'>@Ferreira_Yas</p>
                </div>

            </div>

            <div className='conteudo-post'>

            <div className='text-post'>
                <p className='titulo-post'>Iniciando o dia da melhora maneira possível, logo cedo já programando insanos programas. #vivaacomputção #trabalhemenquantoelesdormem</p>
            </div>

            <div className='midia-post'>
                <img src={ftPost} alt='post'/>
            </div>

            <div className='display-like'>

                <div className='like'>
                    <h3 className='num-like'>9.2K</h3>
                    <FontAwesomeIcon icon={faHeart} />
                </div>

                <div className='coments'>
                    <h3 className='num-coments'>2.1K</h3>
                    <FontAwesomeIcon icon={faComments} />
                </div>

                <div className='input-coments'>
                    <input placeholder='Comente algo!!!' className='perso-input-coments'></input>
                </div>

                <div className='share'>
                    <FontAwesomeIcon icon={faShareNodes}/>
                </div>

            </div>

            </div>

        </section>
    )
};