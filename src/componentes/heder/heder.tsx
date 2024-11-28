
import './heder.css'
import { HashLink as Link } from 'react-router-hash-link';
import useScroll from '../../hooks/visual/useScroll';
import Titulo from '../../componentes-stilos/titulo/titulo';
import Menu from './menu';

function Heder() {
  const { activo } = useScroll();
  return (
    <div className='heder'>
      <Link smooth to="#sobremi" className='logo'><Titulo subtitulo='Andrés Coda'/></Link>      
      <nav className='nav'>
        <Link smooth to="#sobremi" className={activo === '#sobremi' ? 'active' : ''} >Sobre mi</Link>
        <Link smooth to='#experiencias' className={activo === '#experiencias' ? 'active' : ''} >Experiencias</Link>
        <Link smooth to='#estudios' className={activo === '#estudios' ? 'active' : ''} >Estudios</Link>
        <Link smooth to='#habilidades' className={activo === '#habilidades' ? 'active' : ''} >Habilidades</Link>
        <Link smooth to='#contacto' className={activo === '#contacto' ? 'active' : ''} >Contacto</Link>
      </nav>
      <Menu />
    </div>
  )
}

export default Heder;
