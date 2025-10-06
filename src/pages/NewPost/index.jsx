import Header from "../../components/Header/index"
import { IonIcon } from '@ionic/react';
import { arrowForwardOutline } from 'ionicons/icons';

function NewPost() {
    return (
        <Header>
            <Header />
        </Header>

        {/*Inicio do nav*/}
            <nav>
                <div className="">
                    <h1>New Post</h1>
                </div> 
            </nav>

        {/*Main*/}
            <main>
                <div className="">
                    <p>Título</p>
                </div>

        {/*Desenvolvimento do article*/}
                <article>
                    <div>
                        <p>Bublique algo. Como foi o seu dia?... </p>
                    </div>
                    
                    <section>
                        <div>
                            <div className=""><p>#</p></div>
                            <div className="">
                                <div className="">
                                    <IonIcon icon={arrowForwardOutline} />
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
            </main>
    )
}