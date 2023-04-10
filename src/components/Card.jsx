import React from 'react'

const Card = ({datos}) => {
  // console.log(datos)
  return (
    <div className="card m-1 card border-info mb-3" style={{width: '18rem'}}>
        <img src={datos.image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{datos.name}</h5>
        </div>
    </div>
  )
}

export default Card