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
                    <FontAwesomeIcon icon={ faGithub } /> 
                </div>

                <div className="bubble">
                    <IonIcon icon={ rocketOutline } />
                </div>

                <div className="bubble">
                   <IonIcon icon={ airplaneOutline } />
                </div>

                <div className="bubble">
                   <ion-icon icon={ carSportOutline} />
                </div>

                <div className="bubble">
                   <ion-icon icon={ basketballOutline } />
                </div>

                <div className="bubble">
                   <ion-icon icon={ gameControllerOutline } />
                </div>

                <div className="bubble">
                   <ion-icon icon={ chatbubblesOutline } />
                </div>

                <div className="bubble">
                   <ion-icon icon={ footballOutline } />
                </div>
            </div>
        </aside>
    );
}