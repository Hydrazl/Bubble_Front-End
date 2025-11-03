import '../Notification/Notification.css'

export default function Header({Img_Notification, Text_notification, Min_Notification}) {
    return (
        <div className='notification'>
            <img src={Img_Notification} className='notification-img'/>
            <div className='grid grid-cols-1 p-4'>
            <h1 className='notification-text'>{Text_notification}</h1>
            <p className='notification-time'>há {Min_Notification} minutos atrás</p>
            </div>
        </div>
    )
}