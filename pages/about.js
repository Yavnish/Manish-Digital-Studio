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
         <title>About</title>
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
               <h1 style={{marginLeft:"100px",fontSize:"100px", color:'white'}}>About Us</h1>
               <p style={{marginLeft:"100px",fontSize:"27px", color:'white'}}>Welcome to Manish Digital Studio, your one-stop-shop for all your photography and printing needs!</p>
               <p style={{marginLeft:"100px",fontSize:"25px", color:'white'}}>We are a team of passionate photographers who love capturing the special moments of your life. Our<br/>
                team consists of experienced professionals who specialize in wedding photography and videography,<br/>
                album designing, and wedding video editing. We take pride in our work and are committed to delivering <br/>
                the best quality products and services to our clients.<br/><br/>At Manish Digital Studio, we understand that every moment is precious, and we strive to capture them<br/>
                in the most authentic and beautiful way possible. Our photographers have a keen eye for detail and a <br/>
                unique style, which enables them to capture the essence of your special day.<br/><br/>
                Our team is dedicated to providing you with the best customer service and experience. We believe that <br/>
                every client is unique, and we take the time to understand your needs and requirements to ensure that <br/>
                we deliver exactly what you are looking for.<br/><br/>
                In addition to our wedding photography and videography services, we also offer printing related products <br/>
                such as albums, canvases, and photo books. Our team of professionals uses only the latest technology and<br/>
                equipment to deliver high-quality prints that are sure to last a lifetime.<br/><br/>
                Thank you for choosing Manish Digital Studio for all your photography and printing needs. We look forward<br/>
                to capturing your special moments and delivering the best quality products and services to you.
                </p>
           </div>
      
    )
  }
export default home