import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { HiOutlineShoppingCart} from 'react-icons/hi';
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
         marginLeft: "1cm ",
         marginTop:"20px",
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
             <a href="/"  className={styles.navh} >HOME</a>  
             <DropdownMenu.Root>
              <DropdownMenu.Trigger className="trigger">CATALOGUE</DropdownMenu.Trigger>
               <DropdownMenu.Content className="content">
                <DropdownMenu.Item className="item" > <Link href="/cart" style={{textDecoration:'none', color:'white'}}>Frames</Link> </DropdownMenu.Item>
                <DropdownMenu.Item className="item" > <Link href="/cart" style={{textDecoration:'none', color:'white'}}>Printing</Link> </DropdownMenu.Item>
                <DropdownMenu.Item className="item" > <Link href="/cart" style={{textDecoration:'none', color:'white'}}>Fucking</Link> </DropdownMenu.Item>
              </DropdownMenu.Content>
             </DropdownMenu.Root>
             <a href="/about" className={styles.navh} >ABOUT US</a>
             <a href="/contact" className={styles.navh} >CONTACT US</a> 
         </ul>
    </nav>     
           <div style={{display:'flex' , flexDirection:'row' , alignItems:'center' ,marginLeft:'15cm' , marginTop:'-64px'}}>      
             <Link href="/cart" style={{marginLeft:'30cm'}}><HiOutlineShoppingCart size={30} color="white" ></HiOutlineShoppingCart></Link>
             <Link href="/login"><button type="submit" className={styles.button3}>Sign-In</button> </Link>  
            </div>  
               <h1 style={{marginLeft:"700px",fontSize:"100px"}}>hii this is about us</h1>
           </div>
      
    )
  }
export default home