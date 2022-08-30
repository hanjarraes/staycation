import React from 'react'
import Star from 'component/Star'
import Family from 'assets/images/orangbahagia.jpg'
import Button from 'component/Button'

export default function Testing({ data }) {
    return (
        <section className='container'>
            <div className='row align-item-center'>
                <div className='col-auto' style={{ marginRight: 60 }}>
                    <div className='testimonial-hero'>
                        <img src={Family} alt="Testimonial" className='position-absolute' style={{ zIndex: 1, margin: `=30px 0 0 -30px` }} />
                    </div>
                </div>
                <div className='col-6'>
                    <h4 style={{ marginBottom: 40 }}>
                        {data.name}
                    </h4>
                    <Star value={data.rate} width={35} height={35} spacing={4} />
                    <h5 className='h2 font-weight-light line-height-2 my-3'>
                        {data.content}
                    </h5>
                    <span className='text-gray-500'>
                        {data.familyName}, {data.familyOccupation}
                    </span>
                    <div>
                        <Button 
                            className='btn px-5' 
                            style={{marginTop: 40}} 
                            hasShadow 
                            isPrimary 
                            type='link' 
                            href={`/testimony/${data._id}`}>
                                Read Their Story
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
