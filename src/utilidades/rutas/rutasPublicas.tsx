import { Route } from "react-router-dom"
import RutaFalsa from "./rutaFalsa"
import { rutaPublica } from "./rutas"
import Login from "../../paginas/user/login/login"
import Registro from "../../paginas/user/registro/registro"
import Contacto from "../../paginas/contacto/contacto"
import Presentacion from "../../paginas/presentacion/presentacion"
import Experiencias from "../../paginas/experiencias/experiencias"
import Habilidades from "../../paginas/habilidades/habilidades"
function RutasPublicas() {
  return (
    <RutaFalsa>
        <>
            <Route path={'/'} element={<Login />} />
            <Route path={rutaPublica.LOGIN} element={<Login />} />
            <Route path={rutaPublica.REGISTRO} element={<Registro />} />
            <Route path={rutaPublica.CONTACTO} element={<Contacto />} />
            <Route path={rutaPublica.PRESENTACION} element={<Presentacion />} />
            <Route path={rutaPublica.EXPERIENCIAS} element={<Experiencias />} />
            <Route path={rutaPublica.HABILIDADES} element={<Habilidades />} />
        </>
    </RutaFalsa>
  )
}

export default RutasPublicas