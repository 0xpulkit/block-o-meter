import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  console.log(props)
  return (
    // <div class="col mb-4 justigy-content-between align-content-centre">

    <div className="card text-center" >
      <div className="text-center">
        <img className="px-3" src={props.imgUrl} className="card-img-top coin" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.coinName}</h5>
        {/* <p className="card-text">{props.text}</p> */}
        <div className="row">
          <div className="col-12">
            <Link to={`/${props.coinid}`} className="btn btn-outline-primary mb-4">On-Chain Metrics</Link>
          </div>
        
        <div className="col-12">
        <Link to={`/dev/${props.coinid}`} className="btn btn-outline-success">Developer Activity</Link>
        </div>
        

        </div>
        
      </div>
      {/* <div class="card-footer">
        <small class="text-muted">Native Token: {props.coinid.toUpperCase()}</small>
      </div> */}
    </div>
  )
}

export default Card;
