import Form from "../Components/Contact/Form";
import Head from "next/head";

const Contact = () => {
    return ( <div>
         <Head>
        <title>Contact kisu</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta
          name="description"
          content="Contact kisu - Your reliable partner for innovative web development solutions. Get in touch with us to bring your ideas to life!"
        />
      </Head>
        <Form/>
        <div className="space"></div>
        <div className="space"></div>
        
    </div> );
}
 
export default Contact;