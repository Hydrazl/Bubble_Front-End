import { Outlet } from 'react-router-dom';
import ConfigNav from '../../components/Confignav';
import './Settings.css';

function Settings() {
    return (
        <div className="settingsLayout">
            <ConfigNav />

            <main className="settingsMain">
                <Outlet />
            </main>
        </div>
    );
}

export default Settings;