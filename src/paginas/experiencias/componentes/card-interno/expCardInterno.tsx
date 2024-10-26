import './cardInterno.css'
import { Experiencia } from "../../../../modelos/interfaces/db.interface"
import Carrusel from '../../../../componentes/carrucel/carrusel'
import Titulo from '../../../../componentes-stilos/titulo/titulo'
import HabilidadesLista from '../../../habilidades/habilidades'

function ExpCardInterno({ img, nombre, descripcion, año, resumen, tecn }: Experiencia) {
  ;
  return (
    <div className={`exp-container ${resumen ? '' : 'exp-peque'}`}>
      <Carrusel img={img} />
      <div className='exp-texto'>
        <Titulo subtitulo={nombre} />
        <p className="aling-izquierda">{año}</p>
          {resumen
            ? <p>{resumen}</p>
            : descripcion?.map((e, index) => (
              <p key={`exp-text-${index}`}>{e}</p>
            ))}
        <HabilidadesLista 
          tecn={tecn}
          clase='mini-habilidad'
        />
      </div>
    </div>
  )
}

export default ExpCardInterno;