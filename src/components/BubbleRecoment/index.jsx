import { Link } from 'react-router-dom';
import './bubblerecomm.css';


export default function BubbleRecommended({nameBubble, imgBubble,linkBubble}){
    return(
        <>
            <div className='BubbleIconProfile'>

                <Link to={linkBubble}>
                <div className='styleBubble'><img src={imgBubble}/></div>
                </Link>

                <p>{nameBubble}</p>
            </div>
        </>
    )
}