import Head from "next/head"
import Image from "next/image"
import "@fontsource/jost"
import styles from "../styles/Home.module.css"
const home=()=> {
    return (
      <div>
       <Head>
         <title>Home</title>
       </Head>
      <div>
       <div style={{
     zIndex: - 1,
     position:"fixed",
     width: "110vw",
     height:"110vh",
     marginTop:"-10px",
     marginLeft:"-10px" 
    }
    }> 
      <Image
        src="/a.jpg" 
        alt="login"
        layout="fill"
      />
      </div>
      <div style={{
         zIndex: - 1,
         position:"fixed",
         marginLeft: "-7px",
         marginTop:"-9px",
         width: "100vw",
         height:"6vh"  
        }
        }> 
      <Image
        src="/a.jpeg" 
        alt="login"
        layout="fill"
      />
      </div> 
      <div style={{
         zIndex: - 1,
         position:"fixed",
         marginLeft: "-7px",
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
             <a href="/home"style={{marginInline:"15px",textDecoration:'none',color:"black" }}>Home</a>  
             <a href="/about"style={{marginInline:"15px",textDecoration:'none',color:"black"}}>About Us</a>
             <a href="/contact"style={{marginInline:"15px",textDecoration:'none',color:"black"}}>Contact Us</a>
         </ul>
    </nav>
      <div className={styles.signup}><a href="/"><button type="button">Login</button> </a></div>
      <h1 style={{marginLeft:"700px",fontSize:"100px"}}>hii this is about us</h1>
      </div>
      </div>
    )
  }
export default home
