import Titulo from "../../componentes-stilos/titulo/titulo"
import { EstudiosInterface } from "../../modelos/interfaces/db.interface"
import EstudioCard from "./card/estudioCard"
import './estudios.css'
import Certificado1 from '../../assets/certificado.png';
import Certificado2 from '../../assets/scrum.jpg';

const estudio:EstudiosInterface[] = [{
  nombre:"Desarrollo web Full Stack",
  anoInicial: "Desde junio de 2022",
  anoFinal: "hasta julio de 2024",
  descripcion:'En la carrera desarrolle mis habilidades tecnicas en los lenguajes de programación de React.js, Node.js, Nest.js, MySql, JavaScript, TypeScript, HTML, CSS. También perfeccione mis conocimientos en programación orientada a objetos, y desarrollo web.',
  institucion:'Cursada en el Cluster Tecnólogico de Tandil',
  situacion:'Finalizada',
  certificado: [{logo:Certificado2, titulo:'Certificado de scrum'}, {logo:Certificado1, titulo:'Certificado de carrera'}]
},{
  nombre:"Licenciatura en Letras",
  anoInicial: "Desde febrero de 2019",
  anoFinal: "hasta diciembre de 2020",
  descripcion:'Durante estos dos años, conocí autores de la literatura nacional e internacional, adquirí hábitos de lectura, y desarrolle habilidades de comprención y analisis de textos',
  institucion:'Cursada en la Universidad Nacional de La Plata (UNLP)',
  situacion: 'Sin terminar',
},{
  nombre:"Periodismo y Comunicación Social",
  anoInicial: "Desde febrero de 2013",
  anoFinal: "hasta diciembre de 2015",
  descripcion:'Durante estos tres años, aprendí a comunicar ideas de manera sencilla y eficaz, construyendo mensajes claros y precisos. Además, perfeccioné mi escritura y expresión oral, tanto en el ámbito académico como en situaciones cotidianas.',
  institucion:'Cursada en la Universidad Nacional de La Plata (UNLP)',
  situacion: 'Sin terminar',
},{
  nombre:"Ingeniería en Sistemas",
  anoInicial: "Desde febrero de 2010",
  anoFinal: "hasta diciembre de 2012",
  descripcion:'Durante estos dos años, aprendí  arquitectura de computadoras, código binario, lógica, algebra, matematicas, y tuve mi primer acercamiento a los algoritmos y la programación orientada a objetos. Allí conocí Pascal, y C.',
  institucion:'Cursada en la Universidad Tecnólogica Nacional, regional La Plata (UTN)',
  situacion: 'Sin terminar',
}]

function Estudios() {
  return (
    <>

      <Titulo titulo="Estudios"/>
    <div className="estudios">
      {estudio.map((est,index)=>(
        <EstudioCard estudio={est} key={`Estudio-${index}`}/>
      ))}
    </div>
    </>
  )
}

export default Estudios