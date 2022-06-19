import { Header } from './components/Header.jsx';
import { Post } from './components/Post.jsx';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar.jsx';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/LRamson.png',
      name: 'Lucas Ramson',
      role: 'Web Developer'
    },
    content: [ 
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare',},
    ],
    publishedAt: new Date('2022-06-16 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ArthurTWz.png',
      name: 'Arthur Cerqueira',
      role: 'Front-End Developer'
    },
    content: [ 
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare',},
    ],
    publishedAt: new Date('2022-06-17 20:00:00'),
  },
];


export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
