import './Home.css'
import Header from '../../components/Header'
import Post from '../../components/Postagem'
import Status from '../../components/Status'
import Aside from '../../components/Aside'
import ftPost from'../../assets/post-Yasmin.png'
import ftPerfil from '../../assets/Profile-picture.png'

function Home() {
  return (
    <>
    <header>
      <Header/>
    </header>

    <main>
      <Status/>
      <Post name="Yasmin Ferreira"
      id="@Ferreira_Yas"
      description="Iniciando o dia da melhora maneira possível, logo cedo já programando insanos programas. #vivaacomputção #trabalhemenquantoelesdormem"
      url_image_perfil={ftPerfil}
      url_image_post={ftPost}
      like_num="9.2K"
      com_num="2.1K"
      />
      <Post name=""
      id=""
      description=""
      url_image_perfil={" "}
      url_image_post={" "}
      like_num=""
      com_num=""
      />
    </main>
    
    <aside>
      <Aside/>
    </aside>
    </>
  )
}

export default Home
