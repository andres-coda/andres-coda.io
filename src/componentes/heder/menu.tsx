import { HashLink as Link } from 'react-router-hash-link';
import useScroll from '../../hooks/visual/useScroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import './menu.css'
import { useState } from 'react';
function Menu() {
  const { activo } = useScroll();
  const [activarMenu, setActivarMenu] = useState<boolean>(false);

  return (
    <div className="menu">
      {!activarMenu
        ? (<FontAwesomeIcon icon={faBars} color='currentColor' onClick={()=>setActivarMenu(prev=>!prev)}/>)
        : (<>
          <FontAwesomeIcon icon={faX} color='currentColor' onClick={()=>setActivarMenu(prev=>!prev)}/>

          <ul>
            <li><Link smooth to="#sobremi" className={activo === '#sobremi' ? 'active' : ''} onClick={() => setActivarMenu(false)}>Sobre mi</Link></li>
            <li><Link smooth to='#experiencias' className={activo === '#experiencias' ? 'active' : ''} onClick={() => setActivarMenu(false)}>Experiencias</Link></li>
            <li><Link smooth to='#habilidades' className={activo === '#habilidades' ? 'active' : ''} onClick={() => setActivarMenu(false)}>Habilidades</Link></li>
            <li><Link smooth to='#contacto' className={activo === '#contacto' ? 'active' : ''} onClick={() => setActivarMenu(false)}>Contacto</Link></li>
          </ul>
        </>
        )}
    </div>
  )
}

export default Menu;