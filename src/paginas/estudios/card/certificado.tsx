import { useState } from 'react'
import { Habilidades } from '../../../modelos/interfaces/db.interface'
import Boton from '../../../componentes-stilos/boton/boton';
import Modal from '../../../componentes/modal/modal';
import { useModalContext } from '../../../contexto/modalContext';
import './estudioCard.css'

type Props = {
    certificado:Habilidades;
}

function Certificado({certificado}: Props) {
    const {setModal} = useModalContext();
    const [modalLocal, setModalLocal] = useState<boolean>(false);
  return (
    <>
          {certificado && <Boton texto={certificado.titulo} color='exito' onClick={()=>{setModalLocal(prev=>!prev), setModal(prev=>!prev)}}/>}
          <Modal modalLocal={modalLocal} setModalLocal={setModalLocal}>{certificado && <img src={certificado.logo} alt={certificado.titulo} className='certificado'/>}</Modal>
    </>
  )
}

export default Certificado