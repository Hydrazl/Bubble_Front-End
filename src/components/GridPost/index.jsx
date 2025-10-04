import './gridpost.css'
import test1 from '../../assets/placehover.jpeg'
import test2 from '../../assets/meusegundo place.jpeg'


export default function GridPost(){

    return(
        <>
          <div className='gridImgPost'>
            <div id='post'><img src={test1} /></div>
            <div id='post'><img src={test1} /></div>
            <div id='post'><img src={test1} /></div>
            <div id='post'><img src={test1} /></div>
            <div id='post'><img src={test1} /></div>
            {/*Add post   <div id='addpost'><p className='plus'>+</p><p className='add_post'>Add post</p></div>*/}
          </div>
        </>
    )
}