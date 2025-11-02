import './asideBorbulhando.css'
import place from '../../assets/place.jpg'

export default function AsideBorbulhando() {
  return (
    <aside className='aside'>
      
      <div className='searchBox'>
        <input type="text" placeholder="Buscar na Bubble..." />
      </div>

      <section className='card trending'>
        <h3>Borbulhos</h3>
        <div className='list scrollable'>
          {Array.from({ length: 10 }).map((_, i) => (
            <div className='row' key={i}>
              <span className='index'>{i+1}</span>
              <span className='label'>#Silksong</span>
            </div>
          ))}
        </div>
      </section>

      <section className='card'>
        <h3>Top Users</h3>
        <div className='list'>
          {[1,2,3,4,5].map((i) => (
            <div className='row user' key={i}>
              <span className='index'>{i}</span>
              <img src={place} className='avatar'/>
              <span className='label'>@DaviBritto</span>
            </div>
          ))}
        </div>
      </section>

      <section className='card'>
        <h3>Top Bubbles</h3>
        <div className='list'>
          {[1,2,3,4,5].map((i) => (
            <div className='row user' key={i}>
              <span className='index'>{i}</span>
              <img src={place} className='avatar'/>
              <span className='label'>Bolha do Davi</span>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}
