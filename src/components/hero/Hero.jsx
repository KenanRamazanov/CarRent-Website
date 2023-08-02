import React from 'react'
import styles from './Hero.module.css'
import {AiOutlineSearch} from 'react-icons/ai'
const Hero = () => {
  return (
    <div className={styles.hero}>
        <form>
         <div className={styles.text}>
        <label>Where</label>
        <input className={styles.text_input} type="text" placeholder='Search Location' />
        </div>

        <div className={styles.from}>
        <span className={styles.border}></span>
        <label>From</label>
        <input type="date"  />
        </div>

        <div className={styles.untill}>
        <span className={styles.border}></span>
        <label>Untill</label>
        <input type="date"  />
        </div>

        <div className={styles.search_btn}>
            <AiOutlineSearch className={styles.icon} size={20}></AiOutlineSearch>
        <button className={styles.btn}> Serach for cars</button>
        </div>
        </form>
     </div>
  )
}

export default Hero