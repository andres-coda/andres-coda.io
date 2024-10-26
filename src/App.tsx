import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import './App.css'
import Heder from './componentes/heder/heder'
import { Suspense } from 'react'
import RutaFalsa from './utilidades/rutas/rutaFalsa'
import { rutaPrivada, rutaPublica } from './utilidades/rutas/rutas'
import AuthGuard from './utilidades/rutas/authGuard'
import RutasPublicas from './utilidades/rutas/rutasPublicas'

function App() {

  return (
    <BrowserRouter>
      <Heder />
      <div className='conteiner'>
        <Suspense fallback={<p>Cargando...</p>}>
          <RutaFalsa>
            <Route path='/' element={<Navigate to={rutaPrivada.PRIVADA} />} />
            <Route path={`${rutaPublica.PUBLICA}/*`} element={<RutasPublicas/>} />
            <Route element={<AuthGuard />}>
              <Route path={`${rutaPrivada.PRIVADA}/*`} element={<RutasPublicas />} />
            </Route>
          </RutaFalsa>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App
