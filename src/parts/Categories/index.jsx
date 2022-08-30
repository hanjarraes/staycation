import React from 'react'
import Button from 'component/Button'

export default function Categories({ data }) {
    return (
        data.map((item, index) => {
            console.log(item.items)
            return (
                <section className='container' key={`category-${index}`}>
                    <h4 className="mb-3 font-weight-medium">
                        {item.name}
                    </h4>
                    <div className='container-grid'>
                        {item.items.length === 0 ? (
                            <div className="row">
                                <div className="col-auto align-item-center">
                                    There is no destination at this category
                                </div>
                            </div>
                        ) : (
                            item.items.map((dataItem, idx) => {
                                return (
                                    <div className="item column-3 row-1-default" key={`category-${index}-item=${idx}`}>
                                        <div className="card">
                                            {dataItem.isPopular && (
                                                <div className='tag'>
                                                    Popular <span className="font-weight-light">Choice</span>
                                                </div>
                                            )}
                                            <figure className="img-wrapper" style={{height:180}}>
                                                <img src={dataItem.imageUrl} alt={dataItem.name} className="img-cover" />
                                            </figure>
                                            <div className="meta-wrapper">
                                                <Button  type='link' href={`/properties/${dataItem._id}`} className='stretched-link d-block text-gray-800' >
                                                    <h5 className="h4">{dataItem.name}</h5>
                                                </Button>
                                                <span className="text-gray-500">
                                                    {dataItem.city}, {dataItem.country}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        )}
                    </div>
                </section>
            )
        })
    )
}
