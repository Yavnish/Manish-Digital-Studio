import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import "@fontsource/roboto-slab"
import { HiOutlineShoppingCart} from 'react-icons/hi';
import { FaArrowCircleRight} from 'react-icons/fa';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styles from "../styles/Home.module.css"
import style from "../styles/card.module.css"
const home=()=> {
   return (
    <div>
       <Head>
         <title>Home</title>
       </Head>
   
    
      <nav className={styles.navbar}> 
      
        <div style={{
         zIndex: - 1,
         position:"relative",
         width: "45px",
         height:"30px"  
        }
        }> 
      <Image
        src="/logo.png" 
        alt="login"
        layout="fill"
      />
      </div>  
             <a className={styles.nave}>Manish Digital Studio</a>
             <a href="/" className={styles.nave} style={{marginLeft:'3cm'}}>HOME</a>  
             <DropdownMenu.Root>
              <DropdownMenu.Trigger className="trigger" >CATALOGUE</DropdownMenu.Trigger>
               <DropdownMenu.Content >
                <DropdownMenu.Item className="item" > <Link href="/cart" style={{textDecoration:'none', color:'white'}}>Frames</Link> </DropdownMenu.Item>
                <DropdownMenu.Item className="item" > <Link href="/cart" style={{textDecoration:'none', color:'white'}}>Printing</Link> </DropdownMenu.Item>
                <DropdownMenu.Item className="item" > <Link href="/cart" style={{textDecoration:'none', color:'white'}}>Fucking</Link> </DropdownMenu.Item>
              </DropdownMenu.Content>
             </DropdownMenu.Root>
             <Link href="/about" className={styles.nave}>ABOUT US</Link>
             <Link href="/contact" className={styles.nave}>CONTACT US</Link> 
             <Link href="/cart" className={styles.nave} style={{marginLeft:'11cm',marginRight:'0px'}}><HiOutlineShoppingCart fontSize={'25px'}></HiOutlineShoppingCart></Link>
             <Link href="/login"><button type="submit" className={styles.button3}>Sign-In</button> </Link>   
      </nav> 
               <h1 style={{marginLeft:"700px",fontSize:"100px"}}>hii this is contact us</h1>
           </div>
      
    )
  }
export default home