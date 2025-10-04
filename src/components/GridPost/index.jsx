import './gridpost.css'
import test1 from '../../assets/placehover.jpeg'
import test2 from '../../assets/meusegundo place.jpeg'


export default function GridPost(){

    return(
        <>
          <div className='gridImgPost'>

            <div className='styleImgPost'><img src={test2} /></div>
            <div className='styleImgPost'><img src={test1} /></div>
            <div className='styleImgPost'><img src={test2} /></div>
            <div className='styleImgPost'><img src={test1} /></div>

          </div>
        </>
    )
}