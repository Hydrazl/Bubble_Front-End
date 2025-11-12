import './Explorer.css'; 
import Status from '../../components/Status';
import Header from '../../components/Header'; 
import Aside from '../../components/Aside'; 
import Card from '../../components/Card';
import Carro from '../../assets/carro-explorer.jpg';
import Luta from '../../assets/luta explorer.jpg';
import Mine from '../../assets/mine explore.jpg';

 function Explorer() { 
  return (
    <>     
      <header>       
        <Header />     
      </header>      
    
      <main>       
        <Status />     

        <Card
           title="Populares"
           image={Carro}
        />

        <Card
           title="Lutas"
           image={Luta}
        />

        <Card
           title="Jogos"
           image={Mine}
        />

        <Card
           title="Mais Populares"
           image={Carro}
        />
      </main>

      <aside>
        <Aside />
      </aside>   
    </>
  ) 
} 

export default Explorer