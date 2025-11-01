import './popUp.css';
import Postagem from '../Postagem/index';
import Commets from '../CommetsGeral';

export default function Popup({ fechar }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={fechar}>X</button>
        <Postagem />
        <main>
          <section className='Coments'>
            <Commets />
          </section>
        </main>
      </div>
    </div>
  );
}
