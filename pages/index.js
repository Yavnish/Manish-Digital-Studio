import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Navbar from "./Navbar"
import "@fontsource/roboto-slab"
import { FaArrowCircleRight} from 'react-icons/fa';
import styles from "../styles/Home.module.css"
import style from "../styles/card.module.css"
const home=()=> {
   return (
    <div>
       <Head>
         <title>Home</title>
       </Head>
        <div> <Navbar/></div>
         <video autoPlay loop muted style={{ marginTop:'10px',marginLeft:'-6px',width:'99vw', height: '50vh', objectFit:'fill'}}>
           <source src="/video.mp4"/>                       
         </video>
       
      <div style={{ display:'flex', marginLeft:'250px' , marginTop:'100px'}}> 
         <div className={style.card3}>  <Link href="/cart" type="submit" className={styles.button4}>View<FaArrowCircleRight size={30}></FaArrowCircleRight></Link> </div>
         <div className={style.card3}>  <Link href="/cart" type="submit" className={styles.button4}>View<FaArrowCircleRight size={30}></FaArrowCircleRight></Link> </div>
         <div className={style.card3}>  <Link href="/cart" type="submit" className={styles.button4}>View<FaArrowCircleRight size={30}></FaArrowCircleRight> </Link> </div>       
      </div>
    </div>
      
    )
  } 
export default home