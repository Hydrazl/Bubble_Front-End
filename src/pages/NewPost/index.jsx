import Header from "../../components/Header";
import Postagem from "../../components/Postagem"
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";

function NewPost() {
    return (
        <>
            <Header />
            <main>
                <div>
                    <h1>New Post</h1>
                </div>

                <div>
                    <p>Título</p>
                </div>

                <article>
                    <div>
                        <p>Publique algo. Como foi o seu dia?... </p>
                    </div>

                    <section>
                        <div>
                            <div>
                                <p>#</p>
                            </div>
                            <div>
                                <IonIcon icon={arrowForwardOutline} />
                            </div>
                        </div>
                    </section>
                </article>

               <h1>Marcar pessoas</h1>
                <div>
                    <p>Digite o nome da pessoa</p>
                </div>
                
                <h1>Localização</h1>
                <div>
                    <p>Adicionar Localização</p>
                </div>

                <h1>Imagens</h1>
                <div>
                    <img src="/public/imagem_para_baixar.png" />
                    <div>+</div>
                </div>

                
            </main>
        </>
    );
}

export default NewPost;
