import './gridpost.css'
import test1 from '../../assets/placehover.jpeg'
import aranha from '../../assets/aranha.jpg'
import images from '../../assets/images.jpg'
import test2 from '../../assets/meusegundo place.jpeg'
import carro from '../../assets/carro.jpg'
import ciencia from '../../assets/ciencia.jpg'


export default function GridPost(){

    return(
        <>
          <div className='gridImgPost'>
            <div id='post'><img src={test1} /></div>
            <div id='post'><img src={aranha} /></div>
            <div id='post'><img src={images} /></div>
            <div id='post'><img src={carro} /></div>
            <div id='post'><img src={ciencia} /></div>
            {/*Add post   <div id='addpost'><p className='plus'>+</p><p className='add_post'>Add post</p></div>*/}
          </div>
        </>
    )
}