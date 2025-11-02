import "./Home.css";
import Header from "../../components/Header";
import Post from "../../components/Postagem";
import Status from "../../components/Status";
import Aside from "../../components/Aside";
// import AsideBubbles from '../../components/AsideBubble'
import ftPost from "../../assets/post.png";
import ftPerfil from "../../assets/perfil.png";
import ftPost1 from "../../assets/post1.jpeg";
import ftPerfil1 from "../../assets/perfil1.jpg";
import ftPost2 from "../../assets/post2.jpg";
import ftPerfil2 from "../../assets/perfil2.jpg";
import ftPost3 from "../../assets/post3.png";
import ftPerfil3 from "../../assets/perfil3.jpg";

function Home() {
  return (
    <>
      <div className="home-body">
        <header className="home-header">
          <Header />
        </header>

        <main className="home-main">
          <Status />
          <Post
            name="Yasmin Ferreira"
            id="@Ferreira_Yas"
            description="Iniciando o dia da melhora maneira possível, logo cedo já programando insanos programas. #vivaacomputção #trabalhemenquantoelesdormem"
            url_image_perfil={ftPerfil}
            url_image_post={ftPost}
            like_num="9.2K"
            com_num="2.1K"
          />
          <Post
            name="NoobMaster"
            id="@Noob_master123"
            description="Esse novo SilkSong tá demais!!! #SilkSong #hashtag #turururu"
            url_image_perfil={ftPerfil1}
            url_image_post={ftPost1}
            like_num="2.9K"
            com_num="759"
          />
          <Post
            name="Andreia Silva"
            id="@Silva-de-andreia"
            description="Esse AP em Caraguatatuba tem uma das melhores vistas que eu já tive! #viagens"
            url_image_perfil={ftPerfil2}
            url_image_post={ftPost2}
            like_num="433"
            com_num="38"
          />
          <Post
            name="Davi Britto"
            id="@davibritto"
            description="Mais um dia abençoado pelo nosso Senhor Jesus Cristo! #Deus #Abençoado #DaviBritto #calabreso"
            url_image_perfil={ftPerfil3}
            url_image_post={ftPost3}
            like_num="439K"
            com_num="57.7K"
          />
        </main>

        <aside className="home-aside">
          <Aside />
        </aside>
      </div>
    </>
  );
}

export default Home;
