import { BrowserRouter} from 'react-router-dom'
import './App.css'
import Heder from './componentes/heder/heder'
import Presentacion from './paginas/presentacion/presentacion'
import Experiencias from './paginas/experiencias/experiencias'
import HabilidadesCuadricula from './paginas/habilidades/habilidadesCuadricula'
import Contacto from './paginas/contacto/contacto'
import ScrollHandler from './componentes/pantalla/scrollHandler'

function App() {

  return (
    <BrowserRouter>
      <ScrollHandler />
      <Heder />
      <div className='conteiner'>
        <section id='sobremi' className='article'>
          <Presentacion />
        </section>
        <section id='experiencias' className='article'>
          <Experiencias />
        </section>
        <section id='habilidades' className='article'>
          <HabilidadesCuadricula />
        </section>
        <section id='contacto' className='article'>
          <Contacto />
        </section>
        
      </div>
    </BrowserRouter>
  )
}

export default App



/*

<Suspense fallback={<p>Cargando...</p>}>
          <RutaFalsa>
            <Route path='/' element={<Navigate to={rutaPrivada.PRIVADA} />} />
            <Route path={`${rutaPublica.PUBLICA}/*`} element={<RutasPublicas/>} />
            <Route element={<AuthGuard />}>
              <Route path={`${rutaPrivada.PRIVADA}/*`} element={<RutasPublicas />} />
            </Route>
          </RutaFalsa>
        </Suspense>
*/