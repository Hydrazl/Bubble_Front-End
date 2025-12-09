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
            <Commets NameProfile={'amigo da vizinhança'} CommetsTextContent={'Muito lgl esse jogo ae'} like_num={'12'} com_num={'2'} />
            <Commets NameProfile={'amigo da vizinhança'} CommetsTextContent={'Muito lgl esse jogo ae'} like_num={'12'} com_num={'2'} />
            <Commets NameProfile={'amigo da vizinhança'} CommetsTextContent={'Muito lgl esse jogo ae'} like_num={'12'} com_num={'2'} />
          </section>
        </main>
      </div>
    </div>
  );
}
