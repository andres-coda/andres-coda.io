import { DB } from "../../modelos/interfaces/db.interface";
import dbJson from '../../../db/db.json'
import ExpCard from "./componentes/card/expCard";
import './experiencias.css'
import Titulo from "../../componentes-stilos/titulo/titulo";

function Experiencias() {
	const db: DB = dbJson;
	return (
        <>
            <Titulo titulo="Experiencias" />
		<div className='experiencias'>
			{db.experiencias?.map((exp, index) => (
                <ExpCard 
                img={exp.img}
                año={exp.año}
                enlace={exp.enlace}
                enlaceGitBack={exp.enlaceGitBack}
                enlaceGitFront={exp.enlaceGitFront}
                nombre={exp.nombre}
                descripcion={exp.descripcion} 
                resumen={exp.resumen}
                tecn={exp.tecn}               
                key={`exp-${index}`} 
                />
			))}
		</div>
            </>
	)
}
export default Experiencias;