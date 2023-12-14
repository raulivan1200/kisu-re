import Form from "../Components/Contact/Form";
import Head from "next/head";
export const metadata = {
    title: 'Contact Kisu',
    description: 'Contact kisu - Your reliable partner for innovative web development solutions. Get in touch with us to bring your ideas to life.',
   icons: {
      icon: '/kisu.svg',
      shortcut: '/favicon.ico',
  },
  generator: 'Next.js',
  applicationName: 'Web developer design agency portfolio',
  referrer: 'origin-when-cross-origin',
    keywords: ['kisu','Kisu','website','landing page','react website','design', 'webpage', 'Next.js', 'React', 'JavaScript', 'web development', 'UX design', 'branding', 'conversion optimization', 'responsive design', 'e-commerce', 'portfolio', 'landing page', 'SEO', 'user experience', 'mobile-friendly', 'custom design', 'CMS', 'WordPress', 'Shopify',"about","what kisu"],
    authors: [{ name: 'Raul Rivera' }],
    creator: 'Raul Rivera',
    publisher: 'Kisu',
    formatDetection: {
      email: "kisucontacto@gmail.com",
      address: "Mexico",
      telephone: "+52 449 608 2929",
    },
    robots: 'index, follow',
  }
  
const Contact = () => {
    return ( <div>
        <Form/>
        <div className="space"></div>
        <div className="space"></div>
        
    </div> );
}
 
export default Contact;