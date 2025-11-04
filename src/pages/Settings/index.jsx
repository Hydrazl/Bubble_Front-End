// Apenas placeholdes, só existe isso para não dar problema no site, caso deseje remover isso alteres todos os dados e insira novas informações. NÃO DEIXE VAZIO O ARQUIVO.

import { Link } from 'react-router-dom'
import ConfigNav from '../../components/Confignav'
import ButtonGoBack from '../../components/ButtonGoBack';
import EditProfile from '../../components/pagesConfig/EditProfile';

function Settings() {
    return (
        <>
        <header>
            <ConfigNav />
        </header>

        <main>
           <ButtonGoBack/>
           <EditProfile/>
        </main>
        </>
    )
}

export default Settings