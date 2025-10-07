import './Trending.css'
import Header from '../../components/Header'
import BubblefromTreding from './../../components/BubblefromTreding/index';
import place from '../../assets/place.jpg'
import AsideBorbulhando from '../../components/AsideBorbulhando';

function Trending() {
    return (
        <>
        <header>
            <Header/>
        </header>

        <main>

            <h1>Borbulhando</h1>
            <h3>Principais Post que estouraram a Bolha</h3>

            <BubblefromTreding img1={place}
                               img2={place}
                               img3={place}
                               img4={place}
                               img5={place}
                               img6={place}
                               img7={place}
                               img8={place}
                               img9={place}
                               img10={place}
                                />
        </main>

        <aside>
            <AsideBorbulhando/>
        </aside>

        </>
    )
}

export default Trending