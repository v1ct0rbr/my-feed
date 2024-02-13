
import { Header } from "./components/Header";
import './global.css';
import appcss from './App.module.css'
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import { posts } from "./utils/data";
import { User } from "./Model";


const user = {
  name: "Victor Queiroga",
  role: "Analista de Sistemas",
  avatar: "https://github.com/v1ct0rbr.png",
  cover: "https://picsum.photos/200/300?random=1"
} as User


function App() {



  return (
    <div>
      <Header />
      <div className={appcss.wrapper}>
        <Sidebar  avatar={user.avatar} role={user.role} cover={user.cover} name={user.name} />
        <main>
          {posts.map((post) => {
            return (
              <Post key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
                tags={post.tags} comments={post.comments}
              />
            );
          })}
        </main>
      </div>

    </div>
  )
}

export default App
