import { useEffect, useRef, useState, MouseEvent, TouchEvent } from "react";

const usePantalla = () => {
  const [mostrarElemento, setMostrarElemento] = useState<boolean>(false);
  const descrRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false); 
  const [translateX, setTranslateX] = useState<number>(0); 
  const [startX, setStartX] = useState<number | null>(null);

  const handleTouchStart = (e: TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsPaused(true); 
  };

  const handleMouseStart = (e: MouseEvent) => {
    setStartX(e.clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (startX){
      const currentX = e.touches[0].clientX;
      const distanceMoved = currentX - startX;
      setTranslateX((prev) => prev + distanceMoved);
      setStartX(currentX);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (startX) {
      const currentX = e.clientX;
      const distanceMoved = currentX - startX;
      setTranslateX((prev) => prev + distanceMoved);
      setStartX(currentX);
    }
  };

  const handleTouchEnd = () => {
    setStartX(0);  // Termina el deslizamiento
    setIsPaused(false); // Reanuda la animación
  };

  const handleMouseEnd = () => {
    setStartX(null);  // Resetea el inicio del deslizamiento
    setIsPaused(false);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const verificarDesbordamiento = () => {
    const elemento: HTMLDivElement | null = descrRef.current;
    if (elemento && elemento.scrollWidth > elemento.clientWidth) {
      setMostrarElemento(true);
    } else {
      setMostrarElemento(false);
    }
  };

  useEffect(() => {
    verificarDesbordamiento();  // Llamada inicial
    window.addEventListener('resize', verificarDesbordamiento);

    return () => {
      window.removeEventListener('resize', verificarDesbordamiento);
    };
  }, []);



  

  return {
    mostrarElemento, descrRef, isPaused, translateX,
    handleMouseStart, handleTouchStart, handleTouchMove, handleMouseMove,
    handleTouchEnd, handleMouseEnd,togglePause,
  }
}

export default usePantalla;