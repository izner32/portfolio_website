import Head from 'next/head'
import Aside_Left from '../components/Aside_Left';
import Aside_Right from '../components/Aside_Right';
import Layout from '../components/Layout';
import styles from "./../styles/css/home.module.css";

export default function Home() {
  return (
    <Layout>
      <Aside_Left/><Aside_Right/>
    </Layout>
  )
}
