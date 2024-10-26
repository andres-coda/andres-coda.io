import { Habilidades } from '../../modelos/interfaces/db.interface'
import './habilidad.css'

interface Props {
    tec:Habilidades;
    clase?:string;
}

function Habilidad({tec, clase}: Props) {
  return (
    <div className={`skill ${clase ? clase : ''}`}>
          <img src={tec.logo} alt={tec.titulo}/>
          <p>{tec.titulo}</p>
          </div>
  )
}

export default Habilidad