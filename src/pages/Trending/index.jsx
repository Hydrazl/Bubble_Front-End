import './Trending.css'
import Header from '../../components/Header'
import BubblefromTreding from './../../components/BubblefromTreding/index';
import place from '../../assets/place.jpg'
import AsideBorbulhando from '../../components/AsideBorbulhando';

const images = [place, place,place, place,place, place,place, place,place, place]

function Trending() {
    return (
        <>
        <header>
            <Header/>
        </header>

        <main>
          <div className='tituloTredding' > 
            <h1 className='titulo'>Borbulhando</h1>
            <h3 className='subTitulo'>Principais Bolhas que estam estourando...</h3>
          </div>  

            <BubblefromTreding img1={place} img2={place} img3={place} img4={place} img5={place} img6={place} img7={place} img8={place} img9={place} img10={place}/>
        </main>

        <aside>
            <AsideBorbulhando/>
        </aside>

        </>
    )
}

export default Trending