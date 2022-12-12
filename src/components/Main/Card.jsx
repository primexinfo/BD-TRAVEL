import React from 'react'
import './card.css'
import offerImg from "../../assets/img/offer.png";  
const Card = () => {
  return (
    <section>
        <div className="card-containers">
    <img className="img-style" src={offerImg} alt="" />
    <div className="cardtext">
      <div className="card-body">
        <div className="card-title">
          <h3>Special Deal for Lotto Privilege Club Members</h3>
        </div>

        <div className="card-detail">
          <p>
            5% discount(up to 2,000tk) on air ticket booking per
            month.Applicable on base fare. till 31 Dec'22
          </p>
        </div>

        <div>
          <button> Learn More</button>
        </div>
      </div>
    </div>
  </div>
    </section>
    
  )
}

export default Card