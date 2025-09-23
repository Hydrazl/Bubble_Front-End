import './App.css'
import AppRoutes from './routes'

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
    <AppRoutes />
  )
}

export default App
