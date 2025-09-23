import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IonIcon } from "@ionic/react";
import { airplaneOutline, rocketOutline, carSportOutline, basketballOutline, gameControllerOutline, chatbubblesOutline, footballOutline} from "ionicons/icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./aside.css"

export default function Aside() {
    return (
        <aside>
            <div>
                <div>
                    <FontAwesomeIcon icon={ faGithub } /> 
                </div>

                <div>
                    <IonIcon icon={ rocketOutline } />
                </div>

                <div>
                   <IonIcon icon={ airplaneOutline } />
                </div>

                <div>
                   <ion-icon icon={ carSportOutline} />
                </div>

                <div>
                   <ion-icon icon={ basketballOutline } />
                </div>

                <div>
                   <ion-icon icon={ gameControllerOutline } />
                </div>

                <div>
                   <ion-icon icon={ chatbubblesOutline } />
                </div>

                <div>
                   <ion-icon icon={ footballOutline } />
                </div>
            </div>
        </aside>
    );
}