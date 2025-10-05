import './Dialogo.css'

export default function Dialogo({url_img_profile, name}) {
    return (
        <>
            <section>
                <div className="avatar">
                    <picture>
                        <img src={url_img_profile} alt="Profile Picture" />
                    </picture>

                    <p>{name}</p>
                </div>
            </section>

            <section>
                <div className="loading">
                    <div></div>
                </div>
                <div className="person-1">
                    <p>Mateus, nosso gp eh eu vc e o Lucas</p>
                    <p>E o site vai ser um Ecommerce</p>
                    <p>Aí já vou ir adiantando algumas do site e tals, blz?</p>
                    <span>11:50</span>
                </div>
                <div className="person-2">
                    <p>Mano vm fazer uma rede social</p>
                    <p>Ecommerce eh mt simples</p>
                    <p>E td mn vai fzr</p>
                    <span>12:00</span>
                </div>
                <div className="person-1">
                    <p>Mn ctz? prefiro ecommerce</p>
                    <p>Meu amigo já fez uma e disse q eh mt difícil fazer e tals, mo b.o</p>
                    <p>Amanhã nois vê mlhr isso</p>
                    <span>12:40</span>
                </div>

                <div><p>09-08</p></div>

                <div className="person-1">
                    <p>Vou fazer o chat lá</p>
                    <span>01:00</span>
                    <p>Mano nem fiz, fui de berço</p>
                    <p>Mas jaja cmc</p>
                    <p>Rapidin eu faço eh básico, blz?</p>
                    <span>11:50</span>
                </div>
                <div className="person-2">
                    <p>Suave mn, eu vou pensar em algo dps</p>
                    <p>Sla, algo de animação</p>
                    <p>Ai te aviso</p>
                    <span>12:00</span>
                </div>
                <div className="person-1">
                    <p>Não precisa, pra q isso</p>
                    <p>Já ta bom oq nós temos. figma eh so pra mostrar oq vamos fzr no site </p>
                    <p>Vou começar a fzr agr</p>
                    <span>12:40</span>
                </div>

                <div><p>Hoje</p></div>

                <div className="person-1">
                    <p>Vou ir dormir parça</p>
                    <span>01:00</span>
                    <p>Acabei de terminar o chat</p>
                    <p>figma quase 100%</p>
                    <p>Só terminar os feeds e bolhas e gg</p>
                    <span>11:50</span>
                </div>
                <div className="person-2">
                    <p>Mn e se a gente fazer as msgs serem scrollavel?</p>
                    <p>Ai já deixa td animado</p>
                    <p>Se vira ae</p>
                    <span>12:00</span>
                </div>
                <div className="person-1">
                    <p>Mateus ta você ta louco?</p>
                    <p>Mano você só arruma problema para a gente fazer no figma, so B.O parça</p>
                    <p>Mas blz ent, até amanhã</p>
                    <span>12:40</span>
                </div>

                <div><p>Mensagem fresquinha</p></div>

                <div className="person-2">
                    <p>Se liga nesse sfx ae</p>
                    <span>17:00</span>
                </div>
            </section>
        </>
    )
}