import './Explorer.css';
import Status from '../../components/Status';
import Header from '../../components/Header';
import Aside from '../../components/Aside';

function Explorer() {
  return (
    <>
    <header>
      <Header/>
    </header>

    <main>
      <Status />
    </main>
    </>
  )
}

export default Explorer