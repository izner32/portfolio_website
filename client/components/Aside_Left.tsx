import React from 'react'
import styles from "./../styles/css/aside_left.module.css";
import Footer from './Footer';

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
                    <h1 className={styles.container__heading}>PROJECTS</h1>
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
                <h1 className={styles.container__heading}>BLOG</h1>
                    <div className={styles.section_3__wrap}>
                        <h1 className={styles.section_3__heading}>Currying</h1>
                        <hr/>
                        <p className={styles.section_3__tags}>programming paradigm, javascript</p>
                        <p className={styles.section_3__paragraph}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit magnam cupiditate at voluptatum pariatur odio.</p>
                        <a className={styles.section_3__link}>view article</a>
                    </div>
                    <div className={styles.section_3__wrap}>
                        <h1 className={styles.section_3__heading}>Currying</h1>
                        <hr/>
                        <p className={styles.section_3__tags}>programming paradigm, javascript</p>
                        <p className={styles.section_3__paragraph}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit magnam cupiditate at voluptatum pariatur odio.</p>
                        <a className={styles.section_3__link}>view article</a>
                    </div>
                </section>
                <section className={`${styles.container__section_4} ${styles.section}`}>
                <h1 className={styles.container__heading}>CONTACT</h1>
                    <form className={styles.section_4__form} method="POST">
                        <div className={styles.form__div}>
                            <label htmlFor="name" className={styles.form__label}>Name</label>
                            <input type="text" className={styles.form__control} />
                        </div>
                        <div className={styles.form__div}>
                            <label htmlFor="exampleInputEmail1" className={styles.form__label}>Email address</label>
                            <input type="email" className={styles.form__control} aria-describedby="emailHelp" />
                        </div>
                        <div className={styles.form__div}>
                            <label htmlFor="message"  className={styles.form__label}>Message</label>
                            <textarea  className={styles.form__control} ></textarea>
                        </div>
                        <button type="submit" className={styles.form__submit}>Submit</button>
                    </form>
                </section>
                <section className={styles.container__footer}>
                    <Footer/>
                </section>
            </div>
    )
}

export default Aside_Left
