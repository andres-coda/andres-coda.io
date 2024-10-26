import { ReactNode } from "react";
import './formulario.css'
import Boton, { BtnColor } from "../boton/boton";
import Botonera from "../boton/Botonera/botonera";
import Titulo from "../titulo/titulo";

interface FormularioProps {
  children: ReactNode;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  titulo: string;
  onReset?: () => void;
  textBtnConfirmar?: string;
  textBtnSecundario?: string;
  onClickSecundario?: () => void;
  clasBtn?:BtnColor | null;
}

function Formulario({ children, onSubmit, titulo, onReset, textBtnConfirmar, textBtnSecundario, onClickSecundario, clasBtn }: FormularioProps) {
  return (
    <>
      <Titulo
        titulo={titulo}
      />
      <form onSubmit={onSubmit} onReset={onReset} className="formulario" >
        {children}
        <Botonera
          children={
            <>
              {onReset ? <Boton texto="Borrar" tipo="reset" color="exito" /> : null}
              {onClickSecundario
                ? <Boton
                  texto={textBtnSecundario ? textBtnSecundario : 'Cancelar'}
                  color="exito"
                />
                : null}
              <Boton texto={textBtnConfirmar ? textBtnConfirmar : 'Confirmar'} tipo="submit" color={ clasBtn ? clasBtn : "secundario"} />
            </>
          }
        />
      </form>
    </>
  )
}
export default Formulario;


/*
    <Boton texto="Peligro" tipo="reset" color="peligro"/>
    <Boton texto="Deshabilitado" tipo="button" color="deshabilitado"/>
<Boton texto="Exito" tipo="button" color="exito"/>
<Boton texto="Disimulado" tipo="button" color="disimulado"/>

*/