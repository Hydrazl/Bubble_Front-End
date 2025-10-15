import './ButtonGoBack.css';
import { useGoBack } from "../../hook/useGoBack";

export default function ButtonGoBack({ fallbackPath = '/' }) {
        const goBack = useGoBack (fallbackPath);

        return (    
            <button onClick={goBack}>
                <div className='circle-icon cursor-pointer'>
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
            </button>
        );
}