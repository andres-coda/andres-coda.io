import { ReactNode, useEffect, useRef, MouseEvent } from "react";
import { createPortal } from "react-dom";
import './modal.css'
import { useModalContext } from "../../contexto/modalContext";
import Boton from "../../componentes-stilos/boton/boton";
import useRetardo from "../../hooks/tiempo/useRetardo";

const eventListener = 'keydown'

interface PropsModal{
    children: ReactNode;
    modalLocal?:boolean;
    setModalLocal?: (value: boolean) => void;
} 

function Modal({ children, modalLocal, setModalLocal }:PropsModal) {
  const modalRef = useRef<HTMLDivElement>(null)
  const {modal, setModal } = useModalContext();
  const retardoModal = useRetardo(setModal, 100)

  const cerrarModal = () => {
    if (modalRef.current){
      modalRef.current.classList.remove('modal-activo');
      modalRef.current.classList.add('modal-inactivo');
    }
    retardoModal(false);
  }

  const handleClickDentroModal = (e:MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const modalRoot = document.getElementById('modal');

  useEffect(()=>{
    if(!modal && modalLocal && setModalLocal) {
      setModalLocal(false);
    }
  },[modal, setModal])

  useEffect(()=>{
    const handleEsc =(e:KeyboardEvent) =>{
      if(e.key === 'Escape') {
        cerrarModal()
      }
    }
    if(modal) {
      document.addEventListener(eventListener, handleEsc);
      if (modalRef.current){
        modalRef.current.classList.add('modal-activo');
      }
    } else {
      if (modalRef.current){
      modalRef.current.classList.remove('modal-activo');
      modalRef.current.classList.remove('modal-inactivo');
    }
    }

    return () =>{
      document.removeEventListener(eventListener, handleEsc);
    }
  },[modal, setModal])

  if (!modal || !modalRoot || modalLocal === false){
    return null;
  }

  return createPortal(
    <div className={`modal-fondo ${modal ? 'modal-abierto' : ''}`} onClick={cerrarModal}>
      <div className="modal-frente" ref={modalRef} onClick={handleClickDentroModal}>
        {children}
        <Boton onClick={cerrarModal} texto="X" color="cerrar" />
      </div>
    </div>, modalRoot
  )
}

export default Modal;