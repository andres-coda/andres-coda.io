import './presentacion.css'
import dbJson from '../../../db/db.json'
import { DB } from '../../modelos/interfaces/db.interface';
import linkedin from '../../assets/linckedin.svg'

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
              <div className='enlaces'>
                <a href='https://www.linkedin.com/in/andr%C3%A9s-coda-83824027a/'  target="_blank"><img src={linkedin} alt='Linkedin' width={32} height={32}/></a>
              </div>
            </div>
        </div>
      </div>
  )
}

export default Presentacion