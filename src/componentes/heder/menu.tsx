import { HashLink as Link } from 'react-router-hash-link';
import useScroll from '../../hooks/visual/useScroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import './menu.css'
import { useRef, useState } from 'react';
function Menu() {
  const menuRef = useRef<HTMLDivElement>(null)
  const { activo } = useScroll();
  const [activarMenu, setActivarMenu] = useState<boolean>(false);

  return (
    <div className={`menu-fondo ${!activarMenu ? 'menu-activo' : ''}`} onClick={()=>setActivarMenu(false)}>
    <div className="menu" ref={menuRef} onClick={(e)=>e.stopPropagation()}>
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
    </div>
  )
}

export default Menu;