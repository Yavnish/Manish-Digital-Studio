import Image from "next/image"
import Link from "next/link"
import "@fontsource/roboto-slab"
import { HiOutlineShoppingCart} from 'react-icons/hi';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styles from "../styles/Home.module.css"
function Navbar() {
   return (
      <nav className={styles.navbar}> 
       <div> 
          <Image
            src="/logo.png" 
            alt="login"
            width= "45"
            height="30"  
          />
        </div> 
          <Link href="/" className={styles.nave}>Manish_Digital_Studio</Link>
          <Link href="/" className={styles.nave} style={{marginLeft:'3cm'}}>HOME</Link>  
          <DropdownMenu.Root>
           <DropdownMenu.Trigger className="trigger" >CATALOGUE</DropdownMenu.Trigger>
            <DropdownMenu.Content >
             <DropdownMenu.Item className="item" > <Link href="/frame" style={{textDecoration:'none', color:'white'}}>Frames</Link> </DropdownMenu.Item>
             <DropdownMenu.Item className="item" > <Link href="/print" style={{textDecoration:'none', color:'white'}}>Printing</Link> </DropdownMenu.Item>
             <DropdownMenu.Item className="item" > <Link href="/cart" style={{textDecoration:'none', color:'white'}}>Frames</Link> </DropdownMenu.Item>
             <DropdownMenu.Item className="item" > <Link href="/cart" style={{textDecoration:'none', color:'white'}}>Printing</Link> </DropdownMenu.Item>
             <DropdownMenu.Item className="item" > <Link href="/cart" style={{textDecoration:'none', color:'white'}}>Frames</Link> </DropdownMenu.Item>
             <DropdownMenu.Item className="item" > <Link href="/cart" style={{textDecoration:'none', color:'white'}}>Printing</Link> </DropdownMenu.Item>
           </DropdownMenu.Content>
          </DropdownMenu.Root>
          <Link href="/about" className={styles.nave}>ABOUT</Link>
          <Link href="/contact" className={styles.nave}>CONTACT</Link> 
          <Link href="/cart" className={styles.nave} style={{marginLeft:'13cm'}}><HiOutlineShoppingCart fontSize={'25px'}></HiOutlineShoppingCart></Link>
          <Link href="/login"><button type="submit" className={styles.button3}>Sign-In</button> </Link>   
  
   </nav>  
   
  )
}

export default Navbar