import React, { useEffect, useState } from 'react';
import { ScrollContainer } from './styles';
import { IoIosArrowUp } from 'react-icons/io';

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  // const [isVisible, setIsVisible] = useState(true);
  // const [height, setHeight] = useState(0)

  // const listenToScroll = () => {
  //   let heightToShowFrom = 200;
  //   const winScroll = document.body.scrollTop || 
  //       document.documentElement.scrollTop;
  //   setHeight(winScroll);

  //   if (winScroll > heightToShowFrom) {  
  //        isVisible && setIsVisible(true);
  //   } else {
  //        setIsVisible(false);
  //   }  
  // };
  
  // useEffect(() => {   
  //   window.addEventListener("scroll", listenToScroll);
  //   return () => 
  //      window.removeEventListener("scroll", listenToScroll); 
  // }, [])
  
  

  return (
    <>
      {
        showButton 
        &&
      <ScrollContainer onClick={scrollToTop}>
        <IoIosArrowUp />
      </ScrollContainer>
      }
    </>
  )
}

export default ScrollToTop
