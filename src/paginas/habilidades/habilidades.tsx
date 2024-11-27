import { Habilidades } from '../../modelos/interfaces/db.interface';
import './habilidades.css'
import Habilidad from '../../componentes/habilidades/habilidad';
import usePantalla from '../../hooks/visual/usePantalla';
import logojs from '/src/assets/logoJs.svg'
import logots from '/src/assets/logoTs.svg'
import logosql from '/src/assets/logoSql.svg'
import logohtml from '/src/assets/logohtml.svg'
import logocss from '/src/assets/logoCss.svg'
import logoreact from "/src/assets/react.svg"
import logonode from "/src/assets/logoNode.svg"
import logonest from "/src/assets/logoNest.svg"
import logoc from "/src/assets/logoC.svg"
import logoexel from "/src/assets/logoExcel.svg"
import logogit from "/src/assets/logoGit.svg"
import logofigma from "/src/assets/logoFigma.svg"
import logoproecessing from "/src/assets/logoProsessing.svg"

interface Props{ 
  tecn?:Habilidades[] | undefined;
  clase?:string;
}

const dbJson:Habilidades[]= [
  {
  "logo" : logojs,
  "titulo" : "JavaScript"
},{
  "logo" : logots,
  "titulo" : "TypeScript"
},{
  "logo" : logosql,
  "titulo" : "Sql"
},{
  "logo" : logohtml,
  "titulo" : "HTML"
},{
  "logo" : logocss,
  "titulo" : "CSS"
},{
  "logo" : logoreact,
  "titulo" : "React Js"
},{
  "logo" : logonode,
  "titulo" : "Node Js"
},{
  "logo" : logonest,
  "titulo" : "Nest Js"
},{
  "logo" : logoc,
  "titulo" : "C"
},{
  "logo" : logoexel,
  "titulo" : "Excel"
},{
  "logo" : logogit,
  "titulo" : "Git"
},{
  "logo" : logofigma,
  "titulo" : "Figama"
},{
  "logo" : logoproecessing,
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