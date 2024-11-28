import Titulo from '../../../componentes-stilos/titulo/titulo';
import { EstudiosInterface } from '../../../modelos/interfaces/db.interface';
import './estudioCard.css'
import Certificado from './certificado';

interface Props{
    estudio: EstudiosInterface;
  }
  
  function EstudioCard({estudio}:Props){
    return(
        <article className="estudios-interno">
            <Titulo subtitulo={estudio.nombre} />
          <h5>{estudio.anoInicial} {estudio.anoFinal}</h5>
          <h4> - {estudio.institucion}</h4>
          <p>{estudio.descripcion}</p>
          <div className='enlaces'>

          {estudio.certificado&& estudio.certificado.map((cert,index)=>(
              <Certificado certificado={cert} key={`Cert-${index}`}/>
            ))}
        </div>
        </article>
    )
  }

export default EstudioCard;