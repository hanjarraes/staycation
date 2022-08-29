import Button from 'component/Button'
import React from 'react'

export default function MostPicked(props) {
    return (
        <section className='container' ref={props.refMostPicked}>
            <h4 className="mb-3">Most Picked</h4>
            <div className="container-grid">
                {props.data.map((item, index) => {
                    return (
                        <div key={`mostPiked-${index}`} className={`item column-4 ${index === 0 ? "row-1" : index < 3 ? "row-2" : "row-3"}`}>
                            <div className='card card-featured'>
                                <div className="tag">
                                    ${item.price}
                                    <span className="font-weight-light"> per {item.unit}</span>
                                </div>
                                <figure className="img-wrapper">
                                    <img src={item.imageUrl} alt={item.name} className="img-cover" />
                                </figure>
                                <div className="meta-wrapper">
                                    <Button type='link' href={`/properties/${item._id}`} className='stretched-link d-block text-white'>
                                        <h5> {item.name} </h5>
                                    </Button>                                
                                    <span>
                                        {item.city}, {item.country}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
