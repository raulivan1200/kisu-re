import Form from "../Components/Contact/Form";
import Head from "next/head";

const Contact = () => {
    return ( <div>
         <Head>
        <title>Contact kisu</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
      </Head>
        <Form/>
        <div className="space"></div>
        <div className="space"></div>
        
    </div> );
}
 
export default Contact;