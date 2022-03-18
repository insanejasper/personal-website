import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Footer() {
  const CURRENT_YEAR = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      © { CURRENT_YEAR } Paras Praj | All Rights Reserved
    </footer>
  )
}