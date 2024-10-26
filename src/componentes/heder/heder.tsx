import './heder.css'
import { Link } from 'react-router-dom'
import { rutaPublica } from '../../utilidades/rutas/rutas'

function Heder (){
  return (
    <nav className='heder'>
        <Link to={`${rutaPublica.PUBLICA}${rutaPublica.LOGIN}`} >Iniciar sesión</Link>
        <Link to={`${rutaPublica.PUBLICA}${rutaPublica.REGISTRO}`} >Registrarse</Link>
        <Link to={`${rutaPublica.PUBLICA}${rutaPublica.CONTACTO}`} >Contacto</Link>
        <Link to={`${rutaPublica.PUBLICA}${rutaPublica.EXPERIENCIAS}`} >Experiencias</Link>
        <Link to={`${rutaPublica.PUBLICA}${rutaPublica.HABILIDADES}`} >Habilidades</Link>
        <a href="*">Estudiso</a>
        <Link to={`${rutaPublica.PUBLICA}${rutaPublica.PRESENTACION}`} >Sobre mi</Link>
    </nav>
  )
}

export default Heder;