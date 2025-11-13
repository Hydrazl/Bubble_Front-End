import './Explorer.css'; 
import Status from '../../components/Status';
import Header from '../../components/Header'; 
import Aside from '../../components/Aside'; 
import Card from '../../components/Card';
import Carro from '../../assets/carro-explorer.jpg';
import Luta from '../../assets/luta explorer.jpg';
import Mine from '../../assets/mine explore.jpg';
import Viagem from '../../assets/viagens explore.jpg';
import Ciencia from '../../assets/ciencia.jpg';

 function Explorer() { 
  return (
    <>     
      <header>       
        <Header />     
      </header>      
    
      <main>       
        <Status />     

        <Card
           title="Popular"
           image1={Carro}
           image2={Mine}
           image3={Luta}
           image4={Viagem}
           image5={Ciencia}
        />

        <Card
           title="Filmes"
           image1={Carro}
           image2={Carro}
           image3={Carro}
           image4={Carro}
           image5={Carro}
        />

        <Card
           title="Jogos"
           image1={Carro}
           image2={Carro}
           image3={Carro}
           image4={Carro}
           image5={Carro}
        />

        <Card
           title="Esportes"
           image1={Carro}
           image2={Carro}
           image3={Carro}
           image4={Carro}
           image5={Carro}
        />
      </main>

      <aside>
        <Aside />
      </aside>   
    </>
  ) 
} 

export default Explorer