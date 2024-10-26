import './presentacion.css'
import dbJson from '../../../db/db.json'
import { DB } from '../../modelos/interfaces/db.interface';

function Presentacion() {
  const db: DB = dbJson;

  return (
    <div className='presentacion'>
                <h1>{db.sobreMi.titulo}</h1>
      <div className='presentacion-contenido'>
            <img src={db.sobreMi.img} alt='Andrés Coda' />
            <div>
                <h3>Andrés Coda</h3>
                {db.sobreMi.descripcion?.map((desp,index)=>(
                  <p key={`desp-mi${index}`}>{desp.desp}</p>
                ))}
            </div>
        </div>
      </div>
  )
}

export default Presentacion