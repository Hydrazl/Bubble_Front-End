import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IonIcon } from "@ionic/react";
import { airplaneOutline, rocketOutline, carSportOutline, basketballOutline, gameControllerOutline, chatbubblesOutline, footballOutline} from "ionicons/icons";
import { faGitAlt, faGithub, faJava, faPython, faSteam, faTiktok } from "@fortawesome/free-brands-svg-icons";
import "./aside.css"
import { faBasketball, faCar, faPlane, faRocket } from "@fortawesome/free-solid-svg-icons";

export default function Aside() {
    return (
        <aside>
            <div className="container1">
                <div className="bubble">
                    <FontAwesomeIcon icon={ faGithub } id="icon"/> 
                </div>

                <div className="bubble">
                    <FontAwesomeIcon icon={ faRocket } id="icon"/> 
                </div>

                <div className="bubble">
                    <FontAwesomeIcon icon={ faPlane } id="icon"/> 
                </div>

                <div className="bubble">
                    <FontAwesomeIcon icon={ faGitAlt } id="icon"/> 
                </div>

                <div className="bubble">
                    <FontAwesomeIcon icon={ faBasketball } id="icon"/> 
                </div>

                <div className="bubble">
                    <FontAwesomeIcon icon={ faTiktok } id="icon"/> 
                </div>

                <div className="bubble">
                    <FontAwesomeIcon icon={ faPython } id="icon"/> 
                </div>

                <div className="bubble">
                    <FontAwesomeIcon icon={ faSteam } id="icon"/> 
                </div>
            </div>
        </aside>
    );
}