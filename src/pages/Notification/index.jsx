import Notification from "../../components/Notification";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import { IoMdNotifications } from "react-icons/io";

function Notification() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <section>
                    <h1>Notificações</h1><div><IoMdNotifications /></div>
                </section>
                <div>
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
                </div>
            </main>
            <Aside/>
        </>
    )
}

export default Notification