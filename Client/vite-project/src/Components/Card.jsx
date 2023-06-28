import React from 'react'
import '../Components/Card.css'
import {Link} from 'react-router-dom'

function Card({ props }) {
    return (
        <div>
            {
                props.map((items, index) =>

                    <div key={index} className="card" >
                        <img src={items.image} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{items.className}</h5>
                                <p className="card-text">Price: {items.price}</p>
                                <Link> to={`/cards/${items.name}`}
                                <div  className="btn btn-primary">Click Me</div>
                                </Link>
                                
                            </div>
                    </div>
                )
            }
        </div>
    )
}

export default Card