import { Habilidades } from '../../modelos/interfaces/db.interface';
import './habilidades.css'
import Habilidad from '../../componentes/habilidades/habilidad';
import Titulo from '../../componentes-stilos/titulo/titulo';
import './habilidades.css'
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
  "titulo" : "Figma"
},{
  "logo" : logoproecessing,
  "titulo" : "Processing"
}]
const habilidadesCuadricula = () => {
    const tecno:Habilidades[] | undefined = dbJson; 
  return (
    <div className="conteiner-cuadricula">
        <Titulo titulo='Habilidades' />
        {tecno.map((tec, index)=>(
            <Habilidad tec={tec} key={index}/>
        ))}
    </div>
  )
}

export default habilidadesCuadricula