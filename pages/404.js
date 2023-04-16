import styles from "../styles/Home.module.css"
const Errorpage = () =>{
      return( 
      <>             
         <h1>404</h1>
         <h2>We are sorry, Page not found !</h2>
         <a href="/"><button className={styles.return}> Back to Homepage</button></a>
               
      </>
    );
};
export default Errorpage;