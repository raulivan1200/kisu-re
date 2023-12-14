import React from 'react'
import Work from './wrapperpage'
export const metadata = {
    title: 'Work Kisu',
    description: 'Explore the impressive work portfolio of Kisu - Your go-to choice for top-notch web development services. Browse through our featured projects, and witness the innovation and quality that sets us apart in the industry.',
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
    <div><Work/></div>
  )
}

export default page