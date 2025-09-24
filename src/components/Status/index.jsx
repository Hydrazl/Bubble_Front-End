import { faFaceSmile, faMusic, faPaperPlane, faRightLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./status.css"

export default function Status() {
    return(
        <div className='container-status'>
            <div className="music">
                <FontAwesomeIcon icon={ faMusic } id="icon"/>
            </div>
            <div className='inside-line'/>
            <div className="input-bubble">
                <input placeholder='Qual a bolha de hoje?'></input>
                <div>
                    <FontAwesomeIcon icon={ faFaceSmile } id="smile-icon"/>
                </div>
            </div>
            <div className='inside-line'/>
            <div>
                <FontAwesomeIcon icon={ faPaperPlane } id="arrow-icon" />
            </div>
        </div>
    )
}