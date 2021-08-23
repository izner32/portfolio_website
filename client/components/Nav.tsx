import React from 'react'
import styles from "./../styles/css/nav.module.css";

function Nav() {
    return (
        <>
            <ul className={styles.nav}>
                <li className={styles.nav__li}>HOME</li>
                <li className={styles.nav__li}>PROJECTS</li>
                <li className={styles.nav__li}>BLOG</li>
                <li className={styles.nav__li}>CONTACT</li>
            </ul>
        </>
    )
}

export default Nav
