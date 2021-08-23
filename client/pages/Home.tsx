import Head from 'next/head'
import Aside_Left from '../components/Aside_Left';
import Aside_Right from '../components/Aside_Right';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import styles from "./../styles/css/home.module.css";
import { Scrollbars } from "react-custom-scrollbars-2";

export default function Home() {
  return (
    <div className={styles.global_home}>
        <Layout>
          <Aside_Left/>
          <Aside_Right/>
        </Layout>
    </div>
  )
}
