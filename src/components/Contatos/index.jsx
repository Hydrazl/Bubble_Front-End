import './Contatos.css'

export default function Contatos({name, url_img_profile, last_msg}) {
    return (
        <>
            <div>
            <picture> {/* div da img */}
                <img src={url_img_profile}/>
            </picture>

            <p>{name}</p>
            <span>{last_msg}</span>
            </div>
            <div></div> {/* div q será a barra de baixo do txt */}
        </>
    )
}