import React from 'react'

import PlayIcon from './assets/PlayIcon'
import InfoIcon from './assets/InfoIcon'
import img from './assets/img1.jpg'
import styles from './Billboard.module.css'
const Billboard = () => {
  return (
      <div className={styles.billboard}>
          <div className={styles.innerBillboard}>
              <img src={img} />
              <div className={styles.fadeOut}></div>
              <div className={styles.info}>
                  <div className={styles.description}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam accusantium ut excepturi? Nesciunt atque officiis.
                  </div>
                  <div className={styles.links}>
                      <a href='/'>
                          <PlayIcon />
                          <span>Play</span>
                      </a>
                      <button type='button'>
                          <InfoIcon />
                          <span>More Info</span>
                      </button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Billboard