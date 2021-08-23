import React from 'react'
import styles from "./../styles/css/aside_left.module.css";

function Aside_Left() {
    return (
            <div className={styles.container}>
                <section className={`${styles.container__section_1} ${styles.section}`}>
                    <div className={styles.section_1__wrap}>
                        <h1 className={styles.section_1__heading}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, officia!</h1>
                        <p className={styles.section_1__paragraph}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit magnam cupiditate at voluptatum pariatur odio.</p>
                    </div>
                </section>
                <section className={`${styles.container__section_2} ${styles.section}`}>
                    <div className={styles.section_2__wrap}>
                        <h1 className={styles.section_2__heading}>Todo List</h1>
                        <div className={styles.section_2__icons}>
                            <img></img>
                            <img></img>
                            <img></img>
                        </div>
                        <p className={styles.section_2__paragraph}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit magnam cupiditate at voluptatum pariatur odio.</p>
                        <a className={styles.section_2__link}>view code in github</a>
                    </div>
                    <div className={styles.section_2__wrap}>
                        <h1 className={styles.section_2__heading}>Todo List</h1>
                        <div className={styles.section_2__icons}>
                            <img></img>
                            <img></img>
                            <img></img>
                        </div>
                        <p className={styles.section_2__paragraph}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit magnam cupiditate at voluptatum pariatur odio.</p>
                        <a className={styles.section_2__link}>view code in github</a>
                    </div>
                </section>
                <section className={`${styles.container__section_3} ${styles.section}`}>
                    
                </section>
                <section className={`${styles.container__section_4} ${styles.section}`}>
                    
                </section>
            </div>
    )
}

export default Aside_Left
