import React from 'react'

const Card = ({datos, posicion, handleEliminar}) => {
  // console.log(datos)
  return (
    <div className="card m-1 card border-info mb-3" style={{width: '18rem'}}>
        <img src={datos.image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{datos.name}</h5>
        </div>
        <button onClick={()=> handleEliminar(posicion)}>Eliminar</button>
    </div>
  )
}

export default Card