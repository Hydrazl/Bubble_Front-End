
import './App.css'
import Header from './components/Header'
import Post from './components/Postagem'

function App() {
  return (
    <>
    <header>
      <Header/>
    </header>
    <main>
      <section className='post_roll'>
        <article ><Post/></article>
        <article><Post/></article>
        <article><Post/></article>
      </section>
    </main>
    </>
  )
}

export default App
