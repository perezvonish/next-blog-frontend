import styles from '../styles/page.module.css'
import {Post} from "@/components/posts/Post";

export default function Home() {
  return (
    <main className={styles.main}>
        <Post />
    </main>
  )
}
