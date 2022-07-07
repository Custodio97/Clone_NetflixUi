import React from 'react'
import ArrowIcon from './ArrowIcon'
import ChevronRightIcon from './ChevronRightIcon'
import img from './assets/thumbnail-top10-h.jpg'
import styles from './Segment.module.css'
const Segment = ({title}) => {
  return (
      <div className={styles.segment}>
          <p className={styles.title}>
              {title}
              <span className={styles.icon}>
                  <ArrowIcon/>
              </span>
          </p>
          <div className={styles.row}>
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
              <button className={styles.button}>
                  <ChevronRightIcon/>
              </button>
          </div>
    </div>
  )
}

export default Segment