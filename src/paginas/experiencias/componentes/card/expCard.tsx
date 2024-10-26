import { Experiencia } from "../../../../modelos/interfaces/db.interface";
import Boton from "../../../../componentes-stilos/boton/boton";
import { useState } from "react";
import { useModalContext } from "../../../../contexto/modalContext";
import Modal from "../../../../componentes/modal/modal";
import ExpCardInterno from "../card-interno/expCardInterno";
import Enlaces from "../enlaces/enlaces";
import './expCard.css'

function ExpCard({ img, enlace, enlaceGitFront, enlaceGitBack, nombre, descripcion, año, resumen, tecn }: Experiencia) {
  const [modalLocal, setModalLocal] = useState<boolean>(false);
  const { setModal } = useModalContext();

  return (
    <>

      <div className={`exp-interno`}>
        <ExpCardInterno
          img={img}
          nombre={nombre}
          año={año}
          resumen={resumen}
          tecn={tecn}
        />
          <div className="enlaces-mas">
          <Enlaces
            enlace={enlace}
            enlaceGitBack={enlaceGitBack}
            enlaceGitFront={enlaceGitFront}
          />
          <Boton
            texto={!modalLocal ? 'Mostrar más' : 'Mostrar menos'}
            color="exito"
            onClick={() => { setModal(true), setModalLocal(true) }}
          />
        </div>
      </div>
      <Modal modalLocal={modalLocal} setModalLocal={setModalLocal} >
        <>
        <ExpCardInterno
          img={img}
          nombre={nombre}
          descripcion={descripcion}
          año={año}
          tecn={tecn}
          />
          </>
      </Modal>
    </>
  )

}

export default ExpCard;