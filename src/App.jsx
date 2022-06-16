import { Header } from './components/Header.jsx';
import { Post } from './components/Post.jsx';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar.jsx';

export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Lucas Ramson"
            content="Teste 123 post bem secreto"
          />
          <Post 
            author="Lcas Raumson"
            content=" 123 post Testebem secreto"
          />
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}
