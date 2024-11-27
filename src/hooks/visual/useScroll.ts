import { useState, useEffect } from "react";

function useScroll() {
  const [activo, setActivo] = useState<string>(''); 

  useEffect(() => {
   
    const observer = new IntersectionObserver((entries) => {
   
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          
          setActivo(`#${entry.target.id}`);
        }
      });
    }, {
      threshold: 0.3 
    });

  
    const sections = document.querySelectorAll('section');
    sections.forEach((section: HTMLElement) => {
      observer.observe(section); 
    });    

    
    return () => {
      sections.forEach((section: HTMLElement) => {
        observer.unobserve(section); 
      });
    };
  }, []);

  return { activo }; 
}

export default useScroll;
