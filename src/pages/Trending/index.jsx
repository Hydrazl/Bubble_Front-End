import './Trending.css'
import Header from '../../components/Header'
import { useState, useEffect } from 'react';
import axios from 'axios';
import BubblefromTreding from '../../components/BubblefromTreding';
import AsideBorbulhando from '../../components/AsideBorbulhando';


function Trending() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get('http://localhost:4000/trending');
                setPosts(res.data);
            } catch (err) {
                console.error(err);
                setError('Erro ao carregar trending posts');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;

   
    return (
        <>
            <header>
                <Header/>
            </header>

            <main>
                <div className='tituloTredding'> 
                    <h1 className='titulo'>Borbulhando</h1>
                    <h3 className='subTitulo'>Principais Bolhas que estam estourando...</h3>
                </div>

                <BubblefromTreding posts={posts} />
            </main>

            <aside>
                <AsideBorbulhando/>
            </aside>
        </>
    )
}

export default Trending;
