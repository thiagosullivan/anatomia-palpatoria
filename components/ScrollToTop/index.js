import React, { useEffect, useState } from 'react';
import { ScrollContainer } from './styles';
import { IoIosArrowUp } from 'react-icons/io';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0)
  
  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])
  
  const listenToScroll = () => {
    let heightToShowFrom = 200;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToShowFrom) {  
         isVisible && setIsVisible(true);
    } else {
         setIsVisible(false);
    }  
  };

  return (
    <>
      {
        isVisible 
        &&
        <ScrollContainer onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <IoIosArrowUp />
      </ScrollContainer>
      }
    </>
  )
}

export default ScrollToTop
