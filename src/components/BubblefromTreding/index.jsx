import './bubblefromTreding.css'


export default function BubblefromTreding({img1,img2, img3, img4, img5, img6, img7, img8, img9}){
    return(
        <>
           <div className='BubbleGroup'>

                <div className='BubbleImg'>
                    <img src={img1}/>
                </div>

                <div className='BubbleImg' id='position'>
                    <img src={img2}/>
                </div>

                <div className='BubbleImg' id='position2'>
                    <img src={img3}/>
                </div>

                <div className='BubbleImg' id='position3'>
                    <img src={img4}/>
                </div>

                <div className='BubbleImg' id='position4'>
                    <img src={img5}/>
                </div>

                <div className='BubbleImg' id='position5'>
                    <img src={img6}/>
                </div>

                <div className='BubbleImg' id='position6'>
                    <img src={img7}/>
                </div>

                <div className='BubbleImg' id='position7'>
                    <img src={img8}/>
                </div>

                <div className='BubbleImg' id='position8'>
                    <img src={img9}/>
                </div>

           </div>

        </>
    )
}

