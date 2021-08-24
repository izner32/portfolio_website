import React from 'react'
import Image from 'next/image';
import styles from "./../styles/css/nav.module.css";

function Nav() {
    return (
        <>
            <div>
                <ul className={styles.nav}>
                    <li className={styles.nav__li}><div className={styles.nav__bg}></div><a>HOME</a></li>
                    <li className={styles.nav__li}><div className={styles.nav__bg}></div><a>PROJECTS</a></li>
                    <li className={styles.nav__li}><div className={styles.nav__bg}></div><a>BLOG</a></li>
                    <li className={styles.nav__li}><div className={styles.nav__bg}></div><a>CONTACT</a></li>
                </ul>
                {/* <Image className={styles.ham} src="/ham.png" width={70} height={70} alt="ham"></Image> */}
            </div>
        </>
    )
}

export default Nav
