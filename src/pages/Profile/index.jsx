import { Link } from 'react-router-dom';
import BubbleRecommended from '../../components/BubbleRecoment';
import Header from '../../components/Header';
import BannerProfile from './../../components/BannerProfile/index';
import Post from './../../components/Postagem/index';

export default function Profile(contentImg) {
    return (
        <>
            <header>
                <Header />
            </header>

            <main>
                <BannerProfile  name={'Calabreso'}
                                bio={'Gost de pamonha'}
                                following={2121}
                                follows={232143}
                                bubbles={1233}
                                nickName={'@davibritto'}
                                />
                
                <section className='menuBubbleRecommended'>

                    <BubbleRecommended nameBubble={"jogo"}
                                       imgBubble={"img.png"}
                                       />
                    
                    <BubbleRecommended nameBubble={"jogo"}
                                       imgBubble={"img.png"}
                                       />

                    <BubbleRecommended nameBubble={"jogo"}
                                       imgBubble={"img.png"}
                                       />

                </section>

                <section className='menuPerfil'>

                    <Link ><span className='abasProfile'>Post</span></Link> {/* Coloca um psiduo Item ::before para fazer aquela linha embaixo da palavra  */}
                    <Link ><span className='abasProfile'>Curtidas</span></Link>
                    <Link ><span className='abasProfile'>Salvos</span></Link>
                    <Link ><span className='abasProfile'>Privados</span></Link>
                    <Link ><span className='abasProfile'>Historico</span></Link>

                </section>

                <section>
                    
                </section>

            </main>
        </>
    )
}
