import React from 'react'
import Image from 'next/image';
import styles from "./../styles/css/aside_right.module.css";

function Aside_Right() {
    return (
        <div className={styles.aside_right}>
            <div className={styles.container}>
                <p>Hello, I am</p>
                <h1>Renz <br/>Carillo</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi commodi obcaecati 
                    cumque error laudantium ad unde repellendus impedit ullam quas dicta facilis, voluptates,
                    ostrum provident sit dolore assumenda reprehenderit quasi.
                </p>
                <div>
                    <Image className={styles.container__logo} src="/public/html.svg" width={40} height={40} alt="html"></Image>
                    <Image className={styles.container__logo} src="/public/html.svg" width={40} height={40} alt="css"></Image>
                    <Image className={styles.container__logo} src="/public/html.svg" width={40} height={40} alt="javascript"></Image>
                    <Image className={styles.container__logo} src="/public/html.svg" width={40} height={40} alt="react"></Image>
                    <Image className={styles.container__logo} src="/public/html.svg" width={40} height={40} alt="express"></Image>
                    <Image className={styles.container__logo} src="/public/html.svg" width={40} height={40} alt="node"></Image>
                    <Image className={styles.container__logo} src="/public/html.svg" width={40} height={40} alt="mongodb"></Image>
                    <Image className={styles.container__logo} src="/public/html.svg" width={40} height={40} alt="git"></Image>
                </div>
            </div>
        </div>
    )
}

export default Aside_Right
