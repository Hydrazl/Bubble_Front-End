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
                    <p></p>
                    <p></p>
                    <p></p>
                    <span>11:50</span>
                </div>
                <div className="person-2">
                    <p></p>
                    <p></p>
                    <p></p>
                    <span>12:00</span>
                </div>
                <div className="person-1">
                    <p></p>
                    <p></p>
                    <p></p>
                    <span>12:40</span>
                </div>

                <div><p>09-08</p></div>

                <div className="person-1">
                    <p></p>
                    <span>01:00</span>
                    <p></p>
                    <p></p>
                    <p></p>
                    <span>11:50</span>
                </div>
                <div className="person-2">
                    <p></p>
                    <p></p>
                    <p></p>
                    <span>12:00</span>
                </div>
                <div className="person-1">
                    <p></p>
                    <p></p>
                    <p></p>
                    <span>12:40</span>
                </div>

                <div><p>Hoje</p></div>

                <div className="person-1">
                    <p></p>
                    <span>01:00</span>
                    <p></p>
                    <p></p>
                    <p></p>
                    <span>11:50</span>
                </div>
                <div className="person-2">
                    <p></p>
                    <p></p>
                    <p></p>
                    <span>12:00</span>
                </div>
                <div className="person-1">
                    <p></p>
                    <p></p>
                    <p></p>
                    <span>12:40</span>
                </div>

                <div><p>Mensagem fresquinha</p></div>

                <div className="person-2">
                    <p></p>
                    <span>17:00</span>
                </div>
            </section>
        </>
    )
}