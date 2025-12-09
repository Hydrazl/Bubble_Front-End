import './Mensagem.css';

export default function Mensagem({ Person, mensagem, time, Type }) {
  return (
    <>
    
      <div className={`mensage ${Type !== 'messagem' ? 'hidden' : ''}`} id={Person}>
        <p>{mensagem}</p>
      </div>

    
      {time && Type === 'messagem' && (
        <div className='time' id={Person}>
          <span>{time}</span>
        </div>
      )}

    
      {Type === 'time-line' && (
        <div className='time-line'>
            <div className='line-left'></div>
                <p>{time}</p>
            <div className='line-right'></div>
        </div>
      )}
    </>
  );
}
