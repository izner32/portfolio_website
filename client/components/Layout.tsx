import React from 'react'
import Aside from './Aside_Right'
import Nav from './Nav'
import styles from "./../styles/css/layout.module.css";
import Footer from './Footer';

function Layout({children}) {
    return (
        <div>
            <Nav/>
            {children}
        </div>

    )
}

export default Layout
