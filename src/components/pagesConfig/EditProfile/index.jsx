import './editprofile.css'
import banner from '../../../assets/ocean.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import photoProfile from '../../../assets/meusegundo place.jpeg';
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import '../../BannerProfile/banner.css'

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

                    </div>

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