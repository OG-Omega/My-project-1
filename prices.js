import Layout from '../components/MyLayout.js'
import styles from '../components/anything.module.css'
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}
export default function() {
  return (
      <Layout>
        <p className={styles.text}>Free: Send up to 2GB</p>
        <p className={styles.text}>13 dollars per month: send up to 20GB plus 1TB of storage</p>
        <Link href="https://checkout.stripe.com/pay/cs_test_ZSdEyZGozLXnkQVay4l55hWrOdyVymG5Q3RBoIIbbqT7yxy7jl7xNfgf#fidkdWxOYHwnPyd1blpxYHZxWnJubUZcZFJVa0NqNlVpUmRffHN9YWo8fTU1Y1RoXzY9X2MnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXU%2FKippamZkaW1qdnE%2FMTcxNycpJ2hsYXYnP34nYnBsYSc%2FJ2c2NDNhM2M3KDdkZjQoMTI0Zyg8YGQwKDZjMTY2NzdgPT1jNCcpJ2hwbGEnPycyMjxkY2ZgMyg8MmAzKDE9YTIoPGMzPCg3NTUwZzY9MmM0PTInKSd2bGEnPydmYDdkMTUwMihmPDAzKDE3ZGEoPDwwZyhjNmE3YTcxMWFhNzQneCknZ2BxZHYnP15YeCUl">
        <a className={styles.text} style={linkStyle}>Subscribe</a>
        </Link>
        <div className={styles.multi}></div>
      </Layout>
    )
  }
