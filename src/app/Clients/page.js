import React from 'react'
import Clients from './wrapperpage'
export const metadata = {
    title: 'Clients Kisu',
    description: 'Explore the diverse portfolio of Kisu - Your trusted partner for web development. Discover our successful collaborations and innovative solutions that showcase our expertise and commitment to delivering exceptional results for our clients.',
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
function page() {
  return (
    <div><Clients/></div>
  )
}

export default page