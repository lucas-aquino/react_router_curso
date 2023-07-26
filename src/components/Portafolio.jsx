import { Routes, Route, NavLink, Link } from "react-router-dom"
import Proyecto from "./Proyecto"

const Portafolio = () => {
  return(
    <div>
      <h1>Portafolio</h1>
      <div>
        <ul>
          <li>
            <NavLink to={'proyecto-1'}>Proyecto 1</NavLink>
          </li>
          <li>
            <NavLink to={'proyecto-2'}>Proyecto 2</NavLink>
          </li>
          <li>
            <NavLink to={'proyecto-3'}>Proyecto 3</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Routes>
          <Route path={':id'} element={<Proyecto/>}/>
        </Routes>
      </div>
    </div>
  )
}


export default Portafolio