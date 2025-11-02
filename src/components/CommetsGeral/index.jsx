import './commets.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import LikeButton from '../LikeButton';

export default function Commets({imgProfile, NameProfile, CommetsTextContent, like_num, com_num}){

    //backend jaja

    return(
        <>
            <div className='ProfileCommets'>
                    
                    <div className='PhotoProfile'>
                        <img src={imgProfile}></img>
                        <span>{NameProfile}</span>
                    </div>

                    <div className='conteinertext'>

                    <div className='TextCommets'>
                        <span>{CommetsTextContent}</span>
                    </div>

                    <div className='likeBar'>

                        <div className='likeIcon'>
                            <h3 className='num-like'>{like_num}</h3>
                            <LikeButton />
                       </div>

                        <div className='comentsIcon'>
                            <h3 className='num-coments'>{com_num}</h3>
                            <FontAwesomeIcon icon={faComments} className='coment'/>
                        </div>

                    </div>
                    </div>
            </div>        
        </>
    )
}