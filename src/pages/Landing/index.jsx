import React, { Component } from "react";
import Header from "parts/Header";

export default class Landing extends Component {
    render() {
        return (
            <>
                <Header {...this.props}></Header>
            </>
        )
    }
}