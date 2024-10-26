import './boton.css'
import { MouseEventHandler } from "react";

export type BtnColor = 'primario' | 'secundario' | 'cerrar' | 'exito' | 'disimulado' | 'deshabilitado';

type BtnTipo = 'submit' | 'button' | 'reset';
interface BotonProp{
    onClick?: MouseEventHandler<HTMLButtonElement>;
    texto: string;
    color?:BtnColor;
    tipo?:BtnTipo;
}

function Boton({onClick, texto, color, tipo}:BotonProp){
    return(
        <button 
            onClick={onClick} 
            className={`btn-general ${color?color:'primario'}`}
            type={tipo?tipo:'button'}
        >{texto}</button>
    )
}

export default Boton;
