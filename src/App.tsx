import { Header } from "./components/Header"
import { Post, PostType } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/viniciusfranfer.png',
      name: 'Vinicius França',
      role: 'Full-stack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Opa, pessoal!' },
      { type: 'paragraph', content: 'Gostaria de compartilhar o meu novo diploma!' },
      { type: 'paragraph', content: 'Desenvolvi um projeto do zero e aprendi novas tecnologias. Mais um certificado concluído com Harvard edX.' },
      { type: 'link', content: '#DevFullStack' }
    ],
    publishedAt: new Date('2025-02-17 17:38:30'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Dmxavier00.png',
      name: 'Davi Xavier',
      role: 'Back-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa!' },
      { type: 'paragraph', content: 'Hoje queria compartilhar que conclui a minha experiência!' },
      { type: 'paragraph', content: 'Aprendi a programar em Java e não fiquei desconfortável com a forma como as coisas funcionam. Aprendi que a linguagem é muito mais do que o código.' },
    ],
    publishedAt: new Date('2025-02-20 17:38:30'),
  },
];

export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}