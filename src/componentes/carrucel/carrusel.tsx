import { useState } from 'react';
import './carrusel.css'
import ArrowLeft from '../../assets/arrowLeft.svg'
import ArrowRight from '../../assets/arrowRight.svg'
import { Imagenes } from '../../modelos/interfaces/db.interface';

interface PropsCarrucel {
  img: Imagenes[];
}

const useCarrusel = (length: number) => {
  const [actual, setActual] = useState<number>(0);

  const verificar = (next: boolean) => {
    if (next) {
      setActual((prev) => (prev < length-1 ? prev + 1 : 0))
    } else {
      setActual((prev) => (prev > 0 ? prev - 1 : length -1))
    }
  }

  const handleSelec = (index:number) => {
    setActual(index);
  }

  const handleSiguiente = () => {
    verificar(true);
  }

  const handleAnterior = () => {
    verificar(false);
  }

  return { actual, handleSiguiente, handleAnterior, handleSelec }
}

function Carrusel({ img }: PropsCarrucel) {  
  const {
    actual, handleSiguiente, handleAnterior, handleSelec,
  } = useCarrusel(img.length);

  if (!img || img.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='carrusel'>
      <div className='carrusel-sup'>
      <img src={ArrowLeft} alt='Anterior' title='Anterior' className='flechaAnt' onClick={handleAnterior} />
      <img
        src={img[actual].img}
        alt={img[actual].titulo}
        key={img[actual].img} 
        className="img-transition-enter-active"
      />
      <img src={ArrowRight} alt='Siguiente' title='Siguiente' className='flechaSig' onClick={handleSiguiente} />
      </div>
      <div className='carrusel-inf'>
        {img?.map((img, index)=>(
          <img
            src={img.img}
            alt={img.titulo}
            onClick={()=>handleSelec(index)}
            className={index === actual ? 'img-activa' : ''}
          />
        ))}
      </div>
    </div>
  )
}

export default Carrusel;