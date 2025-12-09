import './Contatos.css'

export default function Contatos({name, url_img_profile, last_msg}) {
    return (
        <>
            <div className='contato'>
                <picture> 
                    <img src={url_img_profile}/>
                </picture>
                <div className='contato-info'>
                    <h1>{name}</h1>
                    <p>{last_msg}</p>
                </div>
            </div>
         
        </>
    )
}