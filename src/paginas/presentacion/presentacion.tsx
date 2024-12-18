import './presentacion.css'
import { SobreMi } from '../../modelos/interfaces/db.interface';
import linkedin from '../../assets/linckedin.svg'
import andresImg from '/src/assets/andres-sinFondo.png';
import Boton from '../../componentes-stilos/boton/boton';
import cv from '../../assets/CodaAndresCV.pdf'

const dbjson:SobreMi = {
  "img": andresImg,
  "titulo": "<Desarrollador web Full Stack/>",
  "descripcion":[
      {"desp":"¡Hola! Soy desarrollador web con experiencia en tecnologías como React, NestJS y SQL, entre otras. Mi enfoque siempre está en resolver problemas reales a través de soluciones tecnológicas eficientes y bien estructuradas."}
  ]
}

function Presentacion() {
  const db: SobreMi= dbjson;

  return (
    <div className='presentacion'>
                <h1>{db.titulo}</h1>
      <div className='presentacion-contenido'>
            <img src={db.img} alt='Andrés Coda' />
            <div>
                <h3>Andrés Coda</h3>
                {db.descripcion?.map((desp,index)=>(
                  <p key={`desp-mi${index}`}>{desp.desp}</p>
                ))}
              <div className='enlaces'>
                <a href={cv}  download="Andres-Coda-CV.pdf">
                  <Boton texto='Descargar CV' color='secundario'/>
                </a>
                <a href='https://www.linkedin.com/in/andr%C3%A9s-coda-83824027a/'  target="_blank"><img src={linkedin} alt='Linkedin' width={32} height={32}/></a>
              </div>
            </div>
        </div>
      </div>
  )
}

export default Presentacion