import React, { Component, createRef } from "react";
import Header from "parts/Header";
import landingData from "json/landingPage.json"
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimonial from "parts/Testimonial";
import Footer from "parts/Footer";

export default class Landing extends Component {
    constructor(props){
        super(props);
        this.refMostPicked = createRef();
    }
    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <Hero refMostPicked={this.refMostPicked} data={landingData.hero} />
                <MostPicked refMostPicked={this.refMostPicked} data={landingData.mostPicked} />
                <Categories refMostPicked={this.refMostPicked} data={landingData.categories} />
                <Testimonial data={landingData.testimonial}/>
                <Footer/>
            </>
        )
    }
}