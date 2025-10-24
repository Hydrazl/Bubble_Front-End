import './Post.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faComments, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import LikeButton from '../LikeButton';

export default function Post({name, id, description, url_image_perfil, url_image_post, like_num, com_num}){
    return(
        <section className='conteiner-post'>

            <div className='conteiner-perfil'>

                <div className='ft-perfil'>
                    <img src={url_image_perfil} alt='perfil'/>
                </div>

                <div className='nome-perfil'>
                    <h2>{name}</h2>
                    <p className='arroba-perfil'>{id}</p>
                </div>

            </div>

            <div className='conteudo-post'>

                <div className='text-post'>
                    <p className='titulo-post'>{description} </p>
                </div>

                <div className='midia-post'>
                    <img src={url_image_post} alt='post'/>
                </div>

                <div className='display-like'>

                    <div className='like'>
                        <h3 className='num-like'>{like_num}</h3>
                        <LikeButton />
                    </div>

                    <div className='coments'>
                        <h3 className='num-coments'>{com_num}</h3>
                        <FontAwesomeIcon icon={faComments} className='coment'/>
                    </div>

                    <div className='input-coments'>
                        <input placeholder='Comente algo!!!' className='pero-insput-coments'></input>
                    </div>

                    <div className='share'>
                        <FontAwesomeIcon icon={faShareNodes}/>
                    </div>

                </div>

            </div>

        </section>
        
    )
};