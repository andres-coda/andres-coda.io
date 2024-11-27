import { DB, Habilidades } from '../../modelos/interfaces/db.interface';
import dbJson from '../../../db/db.json'
import './habilidades.css'
import Habilidad from '../../componentes/habilidades/habilidad';
import Titulo from '../../componentes-stilos/titulo/titulo';

const habilidadesCuadricula = () => {
    const db:DB = dbJson;

    const tecno:Habilidades[] | undefined = db.tecno; 
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