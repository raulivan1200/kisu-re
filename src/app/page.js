import React from 'react';
import Home from "./index";
export const metadata = {
  title: 'Kisu',
  description: 'Kisu is a global branding and UX design agency Craft breathtaking websites that convert with Kisu, your premier UX/web development agency in Mexico. We leverage cutting-edge React and Next.js technologies to deliver unparalleled user experiences and drive powerful results.',
 icons: {
    icon: '/kisu.svg',
    shortcut: '/favicon.ico',
},
generator: 'Next.js',
applicationName: 'Web developer design agency portfolio',
referrer: 'origin-when-cross-origin',
  keywords: ['kisu','Kisu','website','landing page','react website','design', 'webpage', 'Next.js', 'React', 'JavaScript', 'web development', 'UX design', 'branding', 'conversion optimization', 'responsive design', 'e-commerce', 'portfolio', 'landing page', 'SEO', 'user experience', 'mobile-friendly', 'custom design', 'CMS', 'WordPress', 'Shopify'],
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

function Page() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default Page;
