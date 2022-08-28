import React, { Component } from "react";
import Header from "parts/Header";
import landingData from "json/landingPage.json"
import Hero from "parts/Hero";

export default class Landing extends Component {
    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <Hero data={landingData.hero} />
            </>
        )
    }
}