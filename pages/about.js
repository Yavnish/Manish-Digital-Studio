import Head from "next/head"
import Image from "next/image"
import "@fontsource/roboto-slab"
import Navbar from "./Navbar"
const home=()=> {
   return (
    <div>
       <Head>
         <title>About</title>
       </Head>
          <div style={{zIndex:'-1', width:'100%' ,height:"100%",position:'fixed',marginTop:'-10px',marginLeft:'-10px'}}>
             <Image
                    src="/about.jpg" 
                    alt=" "
                    layout="fill"
             />
          </div>    
          <>
            <Navbar/>
          </>
    
             <h1 style={{marginLeft:"100px",fontSize:"100px", color:'white'}}>About Us</h1>
               <h style={{marginLeft:"100px",fontSize:"30px", color:'white'}}>Welcome to Manish Digital Studio, your one-stop-shop for all your photography and printing needs!</h>
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