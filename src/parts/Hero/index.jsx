import React from 'react'
import ImageHero from 'assets/images/img-hero.jpg'
import Button from 'component/Button'
import {numberFormat} from 'utils'

export default function Hero(props) {

    const showMostPicked = () => {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    }
    return (
        <section className='container pt-4'>
            <div className="row align-item-center">
                <div className="col-auto pr-5" style={{ width: 530 }}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                        Forget Busy Work, <br />
                        Start Next Vacation
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight:"170%"}}>
                        We provide that you need to enjoy your holiday with family.
                        Time to make another memorable moments.
                    </p>
                    <Button
                        className='btn px-5'
                        hasShadow isPrimary
                        onClick={showMostPicked}
                    >
                        Show Me Now
                    </Button>

                    <div className="row" style={{marginTop:"50px"}}>
                        <div className="col-auto">
                            <i className="ri-suitcase-3-line icon-traveler" />
                            <h6 className="mt-1">
                                {numberFormat(props.data.travelers)}
                                <span className="text-gray-500 font-weight-light ml-2">Travelers</span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <i className="ri-camera-line icon-traveler" />
                            <h6 className="mt-1">
                                {numberFormat(props.data.treasures)}
                                <span className="text-gray-500 font-weight-light ml-2">Treasures</span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <i className="ri-map-pin-line icon-traveler" />
                            <h6 className="mt-1">
                                {numberFormat(props.data.cities)}
                                <span className="text-gray-500 font-weight-light ml-2">Cities</span>
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="col-6 pl-5">
                    <div style={{ width: 540, height: 410 }}>
                        <img
                            src={ImageHero}
                            alt="Room with couches"
                            className="img-fluid position-absolute img-home-page"
                        />
                        <div className='img-home-page-frame'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
