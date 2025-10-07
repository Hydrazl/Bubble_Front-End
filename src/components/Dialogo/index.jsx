import './Dialogo.css';
import Mensagem from '../Mensagem'

export default function Dialogo({ url_img_profile, name }) {
  const blocos = [
    { Type:"time-line", time: "Today" },
    { Type:"messagem", Person: "self", mensagem: `Mensagem1 \n Mensagem2 \n Mensagem3`, time: "11:00" },
    { Type:"messagem", Person: "other", mensagem: `Mensagem1`, time: "11:02" },
    { Type:"messagem", Person: "self", mensagem: `Mensagem1 \n Mensagem2 \n Mensagem3` },
    { Type:"messagem", Person: "self", mensagem: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi minus repudiandae nostrum asperiores neque adipisci aspernatur deleniti debitis totam repellendus dolor, officiis eius, laboriosam odio aliquam cupiditate placeat reiciendis odit? \n Mensagem2 \n Mensagem3`, time: "11:00" },
    { Type:"messagem", Person: "other", mensagem: `Mensagem1`},
    { Type:"messagem", Person: "other", mensagem: `Mensagem1`, time: "11:02" }
  ];

  return (
    <section className="dialog-container">
      {/* Header fixo */}
      <div className="avatar">
        <picture>
          <img src={url_img_profile} alt="Profile Picture" />
        </picture>
        <p>{name}</p>
      </div>

      {/* Conteúdo que scrolla */}
      <div className="dialogue">
        {blocos.map((bloco, i) => {
          const linhas = bloco.mensagem ? bloco.mensagem.split('\n') : [''];
          return linhas.map((linha, j) => (
            <Mensagem 
              key={`${i}-${j}`}
              Person={bloco.Person}
              mensagem={linha.trim()}
              time={j === linhas.length - 1 ? bloco.time : ""} 
              Type={bloco.Type}
            />
          ))
        })}
      </div>
    </section>
  )
}
