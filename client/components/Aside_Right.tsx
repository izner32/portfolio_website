import React from 'react'
import Image from 'next/image';
import styles from "./../styles/css/aside_right.module.css";

function Aside_Right() {
    return (
        <div className={styles.aside_right}>
            <div className={styles.aside_right__container}>
                <p className={styles.container__intro}>Hello, I am</p>
                <h1 className={styles.container__name}>Renz <br/>Carillo</h1>
                <p className={styles.container__info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, expedita voluptatem quisquam, assumenda ad totam sunt illo non unde amet rerum consequatur odio, aspernatur maxime. Repudiandae, necessitatibus assumenda. Quae, hic!
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
