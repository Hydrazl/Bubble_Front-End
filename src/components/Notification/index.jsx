export default function Header({Img_Notification, Text_notification, Min_Notification}) {
    return (
        <div>
            <img src={Img_Notification}/>
            <h1>{Text_notification}</h1>
            <p>há {Min_Notification} minutos atrás</p>
        </div>
    )
}