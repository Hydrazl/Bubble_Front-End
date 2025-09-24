import './Home.css'
import Header from '../../components/Header'
import Post from '../../components/Postagem'
import Status from '../../components/Status
import Aside from '../../components/Aside'
function Home() {
  return (
    <>
    <header>
      <Header/>
    </header>

    <main>
      <Status/>
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
