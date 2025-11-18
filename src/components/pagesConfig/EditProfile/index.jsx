import './editprofile.css'
import banner from '../../../assets/ocean.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import photoProfile from '../../../assets/meusegundo place.jpeg';
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import '../../BannerProfile/banner.css'

export default function EditProfile(){
    return(
        <>
            <div className='conteinerEditProfile'>

                <div className='formsEdit'>

                   <div className='editInfoName'> 

                        <h3>Seu Nome</h3>
                        <input type='text' className='inputStyle'></input>

                    </div>

                    <div className='editInfoUserName'>

                        <h3></h3>
                        <input type='text' className='inputStyle'></input>

                    </div>

                    <div className='editbio'>

                        <h3>Bio</h3>
                        <input type='text' className='inputStyleBio'></input>

                    </div>

                    <div className='editBanner'>

                        <h3>Editar Banner</h3>
                        <img src={banner} alt='Banner do perfil' className='imgBannerEdit'/>
                        <FontAwesomeIcon icon={faPenToSquare} className='iconEdit' />

                    </div>

                    <div className='editPhoto'>

                        <h3>Editar foto de perfil</h3>
                        <img src={photoProfile} alt='Foto do perfil' className='imgPhotoEditSqrt'/>
                        <img src={photoProfile} alt='Foto do perfil' className='imgPhotoEditAround'/>
                        <FontAwesomeIcon icon={faPenToSquare} className='iconEdit' />

                    </div>

                </div>

            </div>
        </>
    )
}