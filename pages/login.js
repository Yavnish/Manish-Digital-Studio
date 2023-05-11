import Head from "next/head"
import styles from "../styles/Home.module.css"
import style from "../styles/card.module.css"
import Image from "next/image"
import Link from "next/link"
import "@fontsource/roboto-slab"
import { FcGoogle} from 'react-icons/fc';
export default function Home() {
  return (
    <> 
    <div style={{
      position:"absolute",
      width: "35vw",
      height:"60vh",
      marginTop:"100px",
      marginLeft:"5cm",
     }
     }> 
      <Image
        src="/login.webp" 
        alt="login"
        layout="fill"
         
      />
      </div> 
      <Head>
        <title>Login Page</title>
      </Head>
      
      <div className={style.card}>
      <div className={style.card2}>
      <div className={styles.login} >
      <h1 style={{fontfamily :"Jost", marginLeft:'100px',fontWeight:'bolder'}}>Login</h1>  
      <label for="Email">Email:</label>
      <input className={styles.box} id="Email" type="email" placeholder="Email"/>
      <label for="Password">Password: </label>
      <input className={styles.box} type="password" placeholder="Password " />
      </div>
      <div className={styles.reme}><input type="checkbox"/>
      <h1>Remeber Me</h1>
      <h1 style={{marginLeft:"60px"}}>Forgot Password?</h1></div>
      <Link href="/"><button type="submit" className={styles.button}>Login</button> </Link>  
      <Link href="/" style={{textDecoration:'none'}}><button type="button" className={styles.button2}><FcGoogle size={30}></FcGoogle>Login with Google</button> </Link>  
</div>
</div>
    </>
  )
}


