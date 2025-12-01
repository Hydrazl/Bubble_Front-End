// Apenas placeholdes, só existe isso para não dar problema no site, caso deseje remover isso alteres todos os dados e insira novas informações. NÃO DEIXE VAZIO O ARQUIVO.

import { Link } from 'react-router-dom'
import ConfigNav from '../../components/Confignav'
import EditProfile from '../../components/pagesConfig/EditProfile';


function Settings() {
    return (
        <>
       <div className="flex bg-[#0f1a33] ">

        <header>
            <ConfigNav />
        </header>

        <main>
           <EditProfile/>
        </main>

        </div>
        </>

    )
}

export default Settings