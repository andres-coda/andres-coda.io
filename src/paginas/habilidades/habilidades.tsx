import { Habilidades } from '../../modelos/interfaces/db.interface';
import './habilidades.css'
import Habilidad from '../../componentes/habilidades/habilidad';
import usePantalla from '../../hooks/visual/usePantalla';

interface Props{ 
  tecn?:Habilidades[] | undefined;
  clase?:string;
}

const dbJson:Habilidades[]= [
  {
  "logo" : "/src/assets/logoJs.svg",
  "titulo" : "JavaScript"
},{
  "logo" : "/src/assets/logoTs.svg",
  "titulo" : "TypeScript"
},{
  "logo" : "/src/assets/logoSql.svg",
  "titulo" : "Sql"
},{
  "logo" : "/src/assets/logoHtml.svg",
  "titulo" : "HTML"
},{
  "logo" : "/src/assets/logoCss.svg",
  "titulo" : "CSS"
},{
  "logo" : "/src/assets/react.svg",
  "titulo" : "React Js"
},{
  "logo" : "/src/assets/logoNode.svg",
  "titulo" : "Node Js"
},{
  "logo" : "/src/assets/logoNest.svg",
  "titulo" : "Nest Js"
},{
  "logo" : "/src/assets/logoC.svg",
  "titulo" : "C"
},{
  "logo" : "/src/assets/logoExcel.svg",
  "titulo" : "Excel"
},{
  "logo" : "/src/assets/logoGit.svg",
  "titulo" : "Git"
},{
  "logo" : "/src/assets/logoFigma.svg",
  "titulo" : "Figama"
},{
  "logo" : "/src/assets/logoProsessing.svg?raw",
  "titulo" : "Processing"
}]

function HabilidadesLista({tecn, clase}:Props) { 
  const {
    descrRef, isPaused,translateX,
    handleMouseStart, handleTouchStart, handleTouchMove, handleMouseMove,
    handleTouchEnd, handleMouseEnd, 
  } = usePantalla();
  const db:Habilidades[] = dbJson;

  const tecno:Habilidades[] | undefined = tecn? tecn : db; 

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