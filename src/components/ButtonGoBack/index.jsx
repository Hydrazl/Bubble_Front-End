import React from "react";
import './ButtonGoBack.css';
import { useGoBack } from "../../hook/useGoBack";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function ButtonGoBack({ fallbackPath = '/' }) {
        const goBack = useGoBack (fallbackPath);

        return (    
            <button onClick={goBack}>
                <div className='circle-icon cursor-pointer'>
                    <IoIosArrowRoundForward />
                    {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
                </div>
            </button>
        );
}