import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IonIcon } from "@ionic/react";
import { airplaneOutline, rocketOutline, carSportOutline, basketballOutline, gameControllerOutline, chatbubblesOutline, footballOutline} from "ionicons/icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./aside.css"

export default function Aside() {
    return (
        <aside>
            <div className="container">
                <div className="bubble">
                    <FontAwesomeIcon icon={ faGithub } id="icon"/> 
                </div>

                <div className="bubble">
                    <FontAwesomeIcon icon={ faGithub } id="icon"/> 
                </div>

                <div className="bubble">
                    <FontAwesomeIcon icon={ faGithub } id="icon"/> 
                </div>

                <div className="bubble">
                    <FontAwesomeIcon icon={ faGithub } id="icon"/> 
                </div>

                <div className="bubble">
                    <FontAwesomeIcon icon={ faGithub } id="icon"/> 
                </div>

                <div className="bubble">
                    <FontAwesomeIcon icon={ faGithub } id="icon"/> 
                </div>

                <div className="bubble">
                    <FontAwesomeIcon icon={ faGithub } id="icon"/> 
                </div>

                <div className="bubble">
                    <FontAwesomeIcon icon={ faGithub } id="icon"/> 
                </div>
            </div>
        </aside>
    );
}