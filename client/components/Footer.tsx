import React from 'react'
import styles from "./../styles/css/footer.module.css";

function Footer() {
    return (
        <div className={styles.container}>
            <h1 className={styles.container__text}>Made with <span>&nbsp; l̶o̶v̶e̶ </span> keyboard and mouse</h1>
            <p>and nextjs, and vanilla css</p>
        </div>
    )
}

export default Footer
