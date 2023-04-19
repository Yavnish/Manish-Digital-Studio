import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
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
             <DropdownMenu.Root>
              <DropdownMenu.Trigger className="trigger">CATALOGUE</DropdownMenu.Trigger>
               <DropdownMenu.Content className="content">
                <DropdownMenu.Item className="item" > Frames</DropdownMenu.Item>
                <DropdownMenu.Item className="item" > Printing</DropdownMenu.Item>
              </DropdownMenu.Content>
             </DropdownMenu.Root>
            
             <a href="/about"style={{marginInline:"20px",textDecoration:'none',color:"white"}}>ABOUT US</a>
             <a href="/contact"style={{marginInline:"20px",textDecoration:'none',color:"white"}}>CONTACT US</a>
             <Link href="/home"><button type="submit" className={styles.button3}>Sign-In</button> </Link>  
         </ul>
    </nav>
       
      </div>
      
    )
  }
export default home