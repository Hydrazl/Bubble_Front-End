import Header from '../../components/Header'
import Bannerprofile from '../../components/BannerProfile'

function Profile() {
    return (
    <>
        <header>
            <Header/>
        </header>

        <main>

            <Bannerprofile name={'Calabreso'}
                           nickName={'@DaviBritto'}bio={'⚡ Foco, visão e propósito 📖 “Se Deus é por nós, quem será contra?” – Rm 8:31 ✉️ contato@davioficial.com.br'}
                           following={32}
                           follows={'1M'}
                           bubbles={'4'}
             />

            <section>

            </section>
        </main>

    </>
    )
}

export default Profile