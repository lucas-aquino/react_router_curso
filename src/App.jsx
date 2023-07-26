import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Portafolio from './components/Portafolio'



function App() {

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Inicio</NavLink>
          </li>
          <li>
            <NavLink to='/portafolio'>Portafolio</NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route exact path='/' element={
            <h1>Inicio</h1>
          }/>
          <Route path='/portafolio/*' element={<Portafolio/>}/>
        </Routes>
      </section>
    </div>
  )
}

export default App
