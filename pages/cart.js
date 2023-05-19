import Head from "next/head"
import "@fontsource/roboto-slab"
import Navbar from "./Navbar"
const home=()=> {
   return (
    <div>
       <Head>
         <title>About</title>
       </Head>
          <>
            <Navbar/>
          </>
               <h1 style={{marginLeft:"700px",fontSize:"100px"}}>you dont have anything in cart</h1>
           </div>  
    )
  }
export default home