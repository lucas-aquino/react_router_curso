import { useParams } from "react-router-dom"


const Proyecto = () => {
  const params = useParams()
  return (
    <div>
      <h1>Proyecto { params.id?.split('-')[1] }</h1>
    </div>
  )
}

export default Proyecto
