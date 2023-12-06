import Form from "../Components/Contact/Form";
import Head from "next/head";

const Contact = () => {
    return ( <div>
         <Head>
        <title>Meta Tag Example</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
      </Head>
        <Form/>
        <div className="space"></div>
        <div className="space"></div>
        
    </div> );
}
 
export default Contact;