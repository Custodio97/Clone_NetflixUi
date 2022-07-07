import React from 'react'
import FooterLinks from '../FooterLinks/FooterLinks'
import SocialLinks from '../SocialLinks/SocialLinks'

import styles from './Footer.module.css'

const Footer = () => {
  return (
      <footer className={styles.box}>
      <div className={styles.socialLinks}>
        <SocialLinks/>
      </div>
      <FooterLinks/>
    </footer>
  )
}

export default Footer