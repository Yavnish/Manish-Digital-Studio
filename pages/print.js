import Head from "next/head"
import Navbar from "./Navbar"
import Picture from "./picture"
function print() {
  return ( 
    <>
      <Head>
         <title>Printing </title>
      </Head>
       <Navbar/>
       <div style={{marginTop:'5%', marginLeft:'5%'}}>
          <h style={{fontSize:'50px', color:'white', textDecoration:'underline'}}>Laser Cut Designs</h>
       </div>
     
       <div style={{marginTop:'2%',marginLeft:'5%',display:'flex'}}>  
          <div style={{marginInline:'3%'}}> 
           <Picture src="/Laser/1.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Laser/2.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Laser/3.jpg"/>
          </div>
                
          <div style={{marginInline:'3%'}}>
           <Picture src="/Laser/4.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Laser/5.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Laser/6.jpg"/>
          </div>
               
        </div> 
       <div style={{marginTop:'2%',marginLeft:'5%',display:'flex'}}>  
          <div style={{marginInline:'3%'}}>
           <Picture src="/Laser/7.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Laser/8.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Laser/9.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Laser/10.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Laser/11.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Laser/12.jpg"/>
          </div>
               
        </div> 
        
       <div style={{marginTop:'2%',marginLeft:'5%',display:'flex'}}>  
          <div style={{marginInline:'3%'}}>
           <Picture src="/Laser/13.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Laser/14.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Laser/15.jpg"/>
          </div>                            
        </div> 
        

    </> 
  )
}

export default print