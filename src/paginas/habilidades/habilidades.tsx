import { DB, Habilidades } from '../../modelos/interfaces/db.interface';
import dbJson from '../../../db/db.json'
import './habilidades.css'
import Habilidad from '../../componentes/habilidades/habilidad';
import usePantalla from '../../hooks/visual/usePantalla';

interface Props{ 
  tecn?:Habilidades[] | undefined;
  clase?:string;
}

function HabilidadesLista({tecn, clase}:Props) { 
  const {
    descrRef, isPaused,translateX,
    handleMouseStart, handleTouchStart, handleTouchMove, handleMouseMove,
    handleTouchEnd, handleMouseEnd, 
  } = usePantalla();
  const db:DB = dbJson;

  const tecno:Habilidades[] | undefined = tecn? tecn : db.tecno; 

  return (
    <div className='habilidades-container'>

      <div 
        className={`habilidades ${isPaused ? 'paused' : ''}`}
        ref={descrRef}
        style={{ transform: `translateX(${translateX}px)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseStart}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseEnd}
        onMouseLeave={handleMouseEnd}
      >
        {tecno?.map((tec, index)=>(
          <Habilidad tec={tec} clase={clase} key={`tec${index}`}/>
        ))}
        {tecno?.map((tec, index)=>(
          <Habilidad tec={tec} clase={clase} key={`tec${index}repetido`}/>
        ))}
    </div>
    </div>
  )
}

export default HabilidadesLista