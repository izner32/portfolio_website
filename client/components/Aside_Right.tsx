import React from 'react'
import Image from 'next/image';
import styles from "./../styles/css/aside_right.module.css";

function Aside_Right() {
    return (
        <div className={styles.aside_right}>
            <div className={styles.aside_right__container}>
                <p className={styles.container__intro}>Hello, I am</p>
                <h1 className={styles.container__name}>Renz <br/>Carillo</h1>
                <p className={styles.container__info}>Im a 1st year computer science student from De La Salle University - Dasmariñas. Im mainly interested into the magics of data science. My main focus is into web development, im also an forthcoming full stack web developer.
                </p>
                <div className={styles.container__skills}>
                    <Image className={styles.container__logo} src="/html.png" width={40} height={40} alt="html"></Image>
                    <Image className={styles.container__logo} src="/html.png" width={40} height={40} alt="css"></Image>
                    <Image className={styles.container__logo} src="/html.png" width={40} height={40} alt="javascript"></Image>
                    <Image className={styles.container__logo} src="/html.png" width={40} height={40} alt="react"></Image>
                    <Image className={styles.container__logo} src="/html.png" width={40} height={40} alt="express"></Image>
                    <Image className={styles.container__logo} src="/html.png" width={40} height={40} alt="node"></Image>
                    <Image className={styles.container__logo} src="/html.png" width={40} height={40} alt="mongodb"></Image>
                    <Image className={styles.container__logo} src="/html.png" width={40} height={40} alt="git"></Image>
                </div>
            </div>
        </div>
    )
}

export default Aside_Right
