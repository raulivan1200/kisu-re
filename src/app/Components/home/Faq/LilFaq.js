import React from 'react'
import { useState } from 'react';
import ExpandCollapseSection from './LilExpandCollapseSection';
const imageData = [
  'heart.svg', 'world.svg', '/icons/code.svg'
  // Add more image URLs as needed
];

const LilFaq = ({ activeImageIndex, onImageChange }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const handleMouseEnter = (index) => {
    onImageChange(index+1); // Call the function from props to change the image
  };

  const handleToggle = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      onImageChange(index+1); // Call the function from props to change the image
    }
  };
    const faqData = [
      { toggleText: 'Branding', contentText: "We go beyond mere aesthetics to delve into the very essence of your brand, uncovering its unique story, values, and aspirations."},
      { toggleText: 'Digital Products', contentText: "At kisu, we masterfully blend aesthetics and behavioral science to craft digital experiences that foster authentic connections and propel brands to success." },
      { toggleText: 'Websites', contentText: "Where aesthetics meets behavioral science, crafting digital experiences that forge authentic connections and propel brands to success." },
      { toggleText: 'Development', contentText: "Our team of senior UI/UX designers creates engaging digital products that help brands thrive. We use a blend of aesthetics and behavioral science to design products that are both beautiful and effective." },
      { toggleText: 'Content', contentText: "We offer a comprehensive suite of content creation services, including copywriting, illustration, graphics, animation, video, and photography, to help you craft stories that resonate with your audience." },
      // Add more FAQ data as needed
    ];
  //agregar 3d
  return (
    <div >
      {faqData.map((item, index) => (
        <ExpandCollapseSection
          key={index}
          toggleText={item.toggleText}
          contentText={item.contentText}
          isExpanded={index === activeIndex}
          onToggle={() => handleToggle(index)}
          onMouseEnter={() => handleMouseEnter(index)}

        />
      ))}
    </div>
     )
}

export default LilFaq