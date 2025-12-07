import { useEffect, useState } from "react";
import Notification from "../../components/Notification";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import { IoMdNotifications } from "react-icons/io";
import { getNotifications, markAllNotificationsAsRead } from "../../services/api";
import '../Notification/Notification.css';

export default function Notifications() {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadNotifications();
    }, []);

    const loadNotifications = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getNotifications();
            console.log('Notificações carregadas:', data);
            setNotifications(data);
        } catch (err) {
            console.error('Erro ao carregar notificações:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleMarkAllAsRead = async () => {
        try {
            await markAllNotificationsAsRead();
            await loadNotifications();

            if (window.updateNotificationCount) {
                window.updateNotificationCount();
            }
        } catch (err) {
            console.error('Erro ao marcar notificações como lidas:', err);
        }
    };

    const getNotificationText = (notification) => {
        const type = notification.notificationType;
        const sender = notification.actor;
        
        switch (type) {
            case 'like':
                return `${sender?.nickname || 'Alguém'} curtiu seu post`;
            case 'follow':
                return `${sender?.nickname || 'Alguém'} começou a seguir você`;
            case 'comment':
                return `${sender?.nickname || 'Alguém'} comentou no seu post`;
            default:
                return 'Nova notificação';
        }
    };

    const getTimeAgo = (date) => {
        const now = new Date();
        const notificationDate = new Date(date);
        const diffInMs = now - notificationDate;
        const diffInMinutes = Math.floor(diffInMs / 60000);

        if (diffInMinutes < 1) return 'agora';
        if (diffInMinutes < 60) return `${diffInMinutes}m`;

        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) return `${diffInHours}h`;

        const diffInDays = Math.floor(diffInHours / 24);
        return `${diffInDays}d`;
    };

    if (loading) {
        return (
            <>
                <header>
                    <Header />
                </header>
                <main>
                    <section className="notification-head">
                        <h1 className="notification-headtext">Flops</h1>
                        <div className="notification-headtext"><IoMdNotifications /></div>
                    </section>
                    <div className="notifications">
                        <p style={{ textAlign: 'center', padding: '20px' }}>Carregando notificações...</p>
                    </div>
                </main>
                <Aside />
            </>
        );
    }

    if (error) {
        return (
            <>
                <header>
                    <Header />
                </header>
                <main>
                    <section className="notification-head">
                        <h1 className="notification-headtext">Flops</h1>
                        <div className="notification-headtext"><IoMdNotifications /></div>
                    </section>
                    <div className="notifications">
                        <p style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
                            Erro ao carregar notificações: {error}
                        </p>
                        <button
                            className="notifications-seemore"
                            onClick={loadNotifications}
                        >
                            Tentar novamente
                        </button>
                    </div>
                </main>
                <Aside />
            </>
        );
    }

    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <section className="notification-head">
                    <h1 className="notification-headtext">Flops</h1>
                    <div className="notification-headtext"><IoMdNotifications /></div>
                </section>
                <div className="notifications">
                    {notifications.length === 0 ? (
                        <p style={{ textAlign: 'center', padding: '20px' }}>
                            Você não tem notificações ainda
                        </p>
                    ) : (
                        <>
                            {notifications.map((notification) => (
                                <Notification
                                    key={notification.id}
                                    Img_Notification={
                                        notification.actor?.profilePic
                                            ? `${API_URL}/${notification.actor.profilePic}`
                                            : "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                                    }
                                    Text_notification={getNotificationText(notification)}
                                    Min_Notification={getTimeAgo(notification.createdAt)}
                                />
                            ))}
                            {notifications.length > 0 && (
                                <button
                                    className="notifications-seemore"
                                    onClick={handleMarkAllAsRead}
                                >
                                    Marcar todas como lidas
                                </button>
                            )}
                        </>
                    )}
                </div>
            </main>
            <Aside />
        </>
    );
}