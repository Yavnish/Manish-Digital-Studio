import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
import { BiPhoneCall} from 'react-icons/bi';
import style from "../styles/card.module.css"
import "@fontsource/roboto-slab"
import Navbar from "./Navbar"
const home=()=> {
   return (
    <div>
     <Head>
         <title>Contact</title>
     </Head>
     <div style={{zIndex:'-1', width:'100%' ,height:"100%",position:'fixed',marginTop:'-10px',marginLeft:'-10px'}}>
       <Image
              src="/contact.jpg" 
              alt=" "
              layout="fill"
       />
      </div>    
       <>
         <Navbar/>
       </>
       <h1 style={{marginLeft:"35%",fontSize:"100px", color:'aqua'}}>Contact Us</h1>      
       <div style={{ display:'flex' , marginTop:'-60px', marginLeft:'5%'}}> 
         <div className={style.card4}> 
             <div style={{ width:'6vw' ,height:"10vh" , position:'absolute', marginLeft:'7%',marginTop:'-5px'}}> 
                <Image
                 src="/location.png" 
                 alt="Insta"
                 layout="fill"/> 
             </div>    
            <div style={{marginTop:'85px'}}>    
              <h style={{fontFamily:'Roboto Slab', fontSize:'30px', marginLeft:'15%',fontWeight:'bold'}}>Our Shop Location</h>
              <p style={{fontFamily:'Roboto Slab', fontSize:'20px', marginLeft:'15%'}}> Opp. Bus Stand, Puran Market,<br/>Gali no. 2 (Digital Manish Colour World) Charkhi Dadri,Haryana, 127306 </p>
            </div>
         </div>  
         <div className={style.card4}>
           <div style={{marginLeft:'40%'}} >
              <BiPhoneCall size={80} color="green"></BiPhoneCall> 
           </div>   
              <h style={{fontFamily:'Roboto Slab', fontSize:'30px', marginLeft:'18%',fontWeight:'bold'}}>Phone Number's</h>
              <p style={{fontFamily:'Roboto Slab', fontSize:'20px', marginLeft:'18%'}}>Manish Jangra: 9306560741<br/>Sudhir Jangra: 9306560741<br/>Sandeep Jangra: 9813117478  </p>
         </div>
         <div className={style.card4}>
           <div style={{ width:'5vw' ,height:"8vh" , position:'absolute', marginLeft:'7%'}}> 
              <Image
               src="/insta.jpg" 
               alt="Insta"
               layout="fill"/> 
           </div>   
              <div style={{marginTop:'85px'}}>
                <h style={{fontFamily:'Roboto Slab', fontSize:'30px', marginLeft:'25%',fontWeight:'bold',marginTop:'100px'}}>INSTAGRAM</h>
                <Link href="https://instagram.com/manish_digital_world?igshid=ZGUzMzM3NWJiOQ=="style={{textDecoration:'none', color:'black'}}> <p style={{fontFamily:'Roboto Slab', fontSize:'25px', marginLeft:'15%', textDecoration:'none'}}> manish_digital_world </p> </Link>
              </div>
         </div> 
         <div className={style.card4}>
             <div style={{ width:'5vw' ,height:"9vh" , position:'absolute', marginLeft:'7%',marginTop:'-5px'}}> 
                <Image
                 src="/gmail.png" 
                 alt="Insta"
                 layout="fill"/> 
             </div>    
             <div style={{marginTop:'85px'}}>
               <h style={{fontFamily:'Roboto Slab', fontSize:'30px', marginLeft:'36%',fontWeight:'bold'}}>EMAIL</h>
               <p style={{fontFamily:'Roboto Slab', fontSize:'20px', marginLeft:'15%'}}> jangramanish45@gmail.com  </p>
             </div> 
         </div> 
         
      </div>
               
    </div>
      
    )
  }
export default home