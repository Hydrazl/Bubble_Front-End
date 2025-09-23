import './Home.css'
import Header from '../../components/Header'
import Post from '../../components/Postagem'
import Aside from '../../components/Aside'

function Home() {
  return (
    <>
    <header>
      <Header/>
    </header>

    <main>
      <Post/>
      <Post/>
    </main>
    <aside>
      <Aside/>
    </aside>
    </>
  )
}

export default Home
