import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import styles from '../components/anything.module.css'

function PostLink(props) {
  return (
    <li>
      <Link href={`/p/${props.id}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )
}

export default function() {
  return (
    <Layout>

      <h1 className={styles.main}>Private File Transferring</h1>
      <form className={styles.main} action="/action_page.php">
      <label for="key">Key:</label>
      <input type="key" id="key" placeholder="Enter key" name="key"></input>
      <label for="adr">Public Address:</label>
      <input type="address" id="address" placeholder="Enter address" name="address"></input>
      <button type="upload">Upload Files</button>
      <button type="transfer">Transfer</button>

    </form>
    <div className={styles.multi}></div>
    </Layout>
  )
}
