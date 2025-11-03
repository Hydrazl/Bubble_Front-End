import Notification from "../../components/Notification";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import { IoMdNotifications } from "react-icons/io";
import '../Notification/Notification.css'

export default function Notifications() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <section className="notification-head">
                    <h1 className="notification-headtext">Flops</h1><div className="notification-headtext"><IoMdNotifications /></div>
                </section>
                <div className="notifications">
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <button className="notifications-seemore">Mais FLOPS!</button>
                </div>
            </main>
            <Aside/>
        </>
    )
}