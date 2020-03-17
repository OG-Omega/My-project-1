import Layout from '../components/MyLayout.js'
import styles from '../components/anything.module.css'

export default function() {
  return (
    <Layout>
      <p className={styles.text}>This is the about page</p>
      <div className={styles.multi}></div>
    </Layout>
  )
}
