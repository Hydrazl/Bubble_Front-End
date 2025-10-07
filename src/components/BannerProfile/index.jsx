import './Banner.css'

export default function Bannerprofile({name, nickName, banner, photoProfile, bio, follows, 
following, bubbles}){

 
    return(
        <div className='conteinerProfile'>

            <div className='bannerAdjustment'>
                <img src={banner} alt='Profile Photo'/> 
            </div>

            <div className='profile'>
                <div className='photoProfile'>
                    <img src={photoProfile}/>
                </div>

                <div className='nameProfile'>
                    <div>
                        <h1>{name}</h1>
                        {/* pensei em colocar o espaço para o icon, mas se pah não vai dar certo */}
                    </div>
                    <div className='borderNameProfile'></div>
                    <div><h2 className='italic'>{nickName}</h2></div>
                </div>
    
                <div className='btnProfile'>
                    <button > <p>Seguir</p> </button>
                    <button > <p>Compartilhar perfil</p></button>
                </div>
            </div>

            <div className='bio'>

                <h4 className='text-bio'>Bio:</h4>
                <p>{bio}</p>

            </div>

            <div className='numProfile'>

                <div className='textNumProfile'>
                    <h1>{follows}</h1>
                    <p>Seguidores</p>
                </div>

                <div className='textNumProfile'>
                    <h1>{following}</h1>
                    <p>Seguindo</p>
                </div>

                <div className='textNumProfile'>
                    <h1>{bubbles}</h1>
                    <p>Bolhas</p>
                </div>

            </div>
            
        </div>
    )
}