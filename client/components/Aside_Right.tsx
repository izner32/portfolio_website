import React from 'react'
import styles from "./../styles/css/aside_right.module.css";

function Aside_Right() {
    return (
        <div className={styles.aside}>
            <div className={styles.container}>
                <p>Hello, I am</p>
                <h1>Renz <br/>Carillo</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi commodi obcaecati 
                    cumque error laudantium ad unde repellendus impedit ullam quas dicta facilis, voluptates,
                    ostrum provident sit dolore assumenda reprehenderit quasi.
                </p>
                <div>
                    <img></img>
                </div>
            </div>
        </div>
    )
}

export default Aside_Right
