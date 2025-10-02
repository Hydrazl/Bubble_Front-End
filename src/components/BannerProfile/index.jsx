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
                        <p>{name}</p>
                        {/* pensei em colocar o espaço para o icon, mas se pah não vai dar certo */}
                    </div>

                    <div className='borderNameProfile'></div>

                    <div><p>{nickName}</p></div>
                    

                </div>

                <div className='btnProfile'>

                    <button className='btn'> Seguir </button>
                    <button className='btn'> Compartilhar perfil</button>

                </div>


            </div>

            <div className='bio'>

                <h4 className='text-bio'>Bio:</h4>
                <p>{bio}</p>

            </div>

            <div className='numProfile'>

                <div className='textNumProfile'>
                    <p>{follows}</p>
                    <p>Seguidores</p>
                </div>

                <div className='textNumProfile'>
                    <p>{following}</p>
                    <p>Seguindo</p>
                </div>

                <div className='textNumProfile'>
                    <p>{bubbles}</p>
                    <p>Bolhas</p>
                </div>

            </div>
            
        </div>
    )
}