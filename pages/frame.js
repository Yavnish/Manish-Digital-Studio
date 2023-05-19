import Head from "next/head"
import Navbar from "./Navbar"
import Picture from "./picture"
function frame() {
  return ( 
    <>
      <Head>
         <title>Frames </title>
      </Head>
       <Navbar/>
       <div style={{marginTop:'5%', marginLeft:'5%'}}>
          <h style={{fontSize:'50px', color:'white', textDecoration:'underline'}}>Frames Available</h>
       </div>
     
       <div style={{marginTop:'2%',marginLeft:'5%',display:'flex'}}>  
          <div style={{marginInline:'3%'}}>
           <Picture src="/Frames/1.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Frames/2.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Frames/3.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Frames/4.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Frames/5.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Frames/6.jpg"/>
          </div>
               
        </div> 
       <div style={{marginTop:'2%',marginLeft:'5%',display:'flex'}}>  
          <div style={{marginInline:'3%'}}>
           <Picture src="/Frames/7.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Frames/8.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Frames/9.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Frames/10.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Frames/11.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Frames/12.jpg"/>
          </div>
               
        </div> 
        
       <div style={{marginTop:'2%',marginLeft:'5%',display:'flex'}}>  
          <div style={{marginInline:'3%'}}>
           <Picture src="/Frames/13.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Frames/14.jpg"/>
          </div>
           
          <div style={{marginInline:'3%'}}>
           <Picture src="/Frames/15.jpg"/>
          </div>               
          <div style={{marginInline:'3%'}}>
           <Picture src="/Frames/Size.jpg"/>
          </div>               
        </div> 
        

    </> 
  )
}

export default frame