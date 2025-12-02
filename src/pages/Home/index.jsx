import "./Home.css";
import Header from "../../components/Header";
import Feed from "../../components/Feed";
import Status from "../../components/Status";
import Aside from "../../components/Aside";
import { usePosts } from "../../context/PostContext";

function Home() {
  const { posts } = usePosts();

  return (
    <div className="home-body">

      <header className="home-header">
        <Header />
      </header>

      <main className="home-main">
        <Status />
        <Feed posts={posts} />
      </main>

      <aside className="home-aside">
        <Aside />
      </aside>

    </div>
  );
}

export default Home;
