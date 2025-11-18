import './ButtonGoBack.css';
import { useGoBack } from "../../hook/useGoBack";
import { SlArrowRight } from "react-icons/sl";

export default function ButtonGoBack({ fallbackPath = '/' }) {
        const goBack = useGoBack (fallbackPath);

        return (    
            <button onClick={goBack}>
                <div className='circle-icon cursor-pointer'>
                    <SlArrowRight/>
                </div>
            </button>
        );
}