import './botonera.css'
import { ReactNode } from 'react'

interface Props {
    children:ReactNode;
}

function Botonera({children}: Props) {
  return (
    <div className='botonera'>
        {children}
    </div>
  )
}

export default Botonera