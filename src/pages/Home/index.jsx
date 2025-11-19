import "./Home.css";
import Header from "../../components/Header";
import Feed from "../../components/Feed";
import Status from "../../components/Status";
import Aside from "../../components/Aside";

function Home() {
  return (
    <>
      <div className="home-body">
        <header className="home-header">
          <Header />
        </header>

        <main className="home-main">
          <Status />
          <Feed />
        </main>

        <aside className="home-aside">
          <Aside />
        </aside>
      </div>
    </>
  );
}

export default Home;
