import { Habilidades } from '../../modelos/interfaces/db.interface';
import './habilidades.css'
import Habilidad from '../../componentes/habilidades/habilidad';
import Titulo from '../../componentes-stilos/titulo/titulo';

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