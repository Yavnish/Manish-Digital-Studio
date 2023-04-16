import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Home.module.css"
const home=()=> {
    return (
      <div>
       <Head>
         <title>Home</title>
       </Head>
      
          <div style={{
         zIndex: - 1,
         position:"fixed",
         marginLeft: "10cm ",
         marginTop:"-9px",
         width: "5vw",
         height:"6vh"  
        }
        }> 
      <Image
        src="/logo.png" 
        alt="login"
        layout="fill"
      />
      </div>      
      <nav className={styles.navg}>
        <ul >
             <a href="/home"style={{marginInline:"15px",textDecoration:'none',color:"white" }}>HOME</a>  
             <a href="/about"style={{marginInline:"15px",textDecoration:'none',color:"white"}}>ABOUT US</a>
             <a href="/contact"style={{marginInline:"15px",textDecoration:'none',color:"white"}}>CONTACT US</a>
             <Link href="/home"><button type="submit" className={styles.button3}>Sign-In</button> </Link>  
         </ul>
    </nav>
       
      </div>
      
    )
  }
export default home