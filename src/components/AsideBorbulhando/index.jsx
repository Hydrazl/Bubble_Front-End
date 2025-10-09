import './asideBorbulhando.css'
import place from '../../assets/place.jpg'

export default function AsideBorbulhando(){
    return(
        <>
            <input type="text" placeholder="Buscar na Bubble" className='inputAsideBorbulhando'/>

            <div className='divGeral'>

                <div className='divBorbulhos'>

                    <h2>Borbulhos</h2>

                        <div className='contentBorbulhos'>

                            <div className='textborbulho'>
                                <h2>1</h2>
                                <p>#Silksong</p>
                            </div>

                            <div className='textborbulho'>
                                <h2>2</h2>
                                <p>#Silksong</p>
                            </div>

                            <div className='textborbulho'>
                                <h2>3</h2>
                                <p>#Silksong</p>
                            </div>

                            <div className='textborbulho'>
                                <h2>4</h2>
                                <p>#Silksong</p>
                            </div>

                            <div className='textborbulho'>
                                <h2>5</h2>
                                <p>#Silksong</p>
                            </div>

                            <div className='textborbulho'>
                                <h2>6</h2>
                                <p>#Silksong</p>
                            </div>

                            <div className='textborbulho'>
                                <h2>7</h2>
                                <p>#Silksong</p>
                            </div>

                            <div className='textborbulho'>
                                <h2>8</h2>
                                <p>#Silksong</p>
                            </div>

                            <div className='textborbulho'>
                                <h2>9</h2>
                                <p>#Silksong</p>
                            </div>

                            <div className='textborbulho'>
                                <h2>10</h2>
                                <p>#Silksong</p>
                            </div>
                            
                        </div>

                    </div>

                    <div className='divTopUser'>

                        <h2>Top Users</h2>

                            <div className='contentTopuser'>

                                <div className='texttopusers'>
                                    <h2>1</h2>
                                    <img src={place} className='imgTopUsers'/>
                                    <p>@DaviBritto</p>
                                </div>

                                <div className='texttopusers'>
                                    <h2>2</h2>
                                    <img src={place} className='imgTopUsers'/>
                                    <p>@DaviBritto</p>
                                </div>

                                <div className='texttopusers'>
                                    <h2>3</h2>
                                    <img src={place} className='imgTopUsers'/>
                                    <p>@DaviBritto</p>
                                </div>

                                <div className='texttopusers'>
                                    <h2>4</h2>
                                    <img src={place} className='imgTopUsers'/>
                                    <p>@DaviBritto</p>
                                </div>

                                <div className='texttopusers'>
                                    <h2>5</h2>
                                    <img src={place} className='imgTopUsers'/>
                                    <p>@DaviBritto</p>
                                </div>
                            
                            </div>
                        </div>

                        <div className='divTopBubble'>

                        <h2>Top Bubble</h2>

                            <div className='contentTopBubbe'>

                                <div className='textTopBubble'>
                                    <h2>1</h2>
                                    <img src={place} className='imgTopUsers'/>
                                    <p>Bolha do Davi</p>
                                </div>

                                <div className='texttopusers'>
                                    <h2>2</h2>
                                    <img src={place} className='imgTopUsers'/>
                                    <p>Bolha do davi</p>
                                </div>

                                <div className='texttopusers'>
                                    <h2>3</h2>
                                    <img src={place} className='imgTopUsers'/>
                                    <p>Bolha do davi</p>
                                </div>

                                <div className='texttopusers'>
                                    <h2>4</h2>
                                    <img src={place} className='imgTopUsers'/>
                                    <p>Bolha do davi</p>
                                </div>

                                <div className='texttopusers'>
                                    <h2>5</h2>
                                    <img src={place} className='imgTopUsers'/>
                                    <p>Bolha do davi</p>
                                </div>
                            
                            </div>
                        </div>

            </div>

        </>
    )
}