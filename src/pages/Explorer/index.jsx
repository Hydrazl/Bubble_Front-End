import './Explorer.css'; 
import Status from '../../components/Status';
import Header from '../../components/Header'; 
import Aside from '../../components/Aside'; 
import Card from '../../components/Card';
import Carro from '../../assets/carro-explorer.jpg';

 function Explorer() { 
  return (
    <>     
      <header>       
        <Header />     
      </header>      
    
      <main>       
        <Status />     

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