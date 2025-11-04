import './popupshared.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXTwitter, faSquareInstagram, faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function PopupShared({fechar}){
    return(
    <>
        <div className="conteinerIcons">
            <div className="icons">
                <FontAwesomeIcon icon={faSquareXTwitter} className="iconsStyle"/>
                <FontAwesomeIcon icon={faSquareInstagram} className="iconsStyle" />
                <FontAwesomeIcon icon={faSquareWhatsapp} className="iconsStyle" />
                <button onClick={fechar} className='stylefechar'>X</button> 
            </div>
        </div>

    </>
    )
}