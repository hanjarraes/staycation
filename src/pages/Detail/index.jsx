import React from 'react'
// import InputNumber from 'component/Form/InputNumber'
import { InputDate } from 'component/Form';



export default class Detail extends React.Component {
    state = {
        value: {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    render() {
        return (
            <div className='container'>
                <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
                    <div className='col-auto'>
                        {/* <InputNumber
                            max={30}
                            suffix="night"
                            isSuffixPlural
                            onChange={this.handleChange}
                            name="value"
                            value={this.state.value}
                        /> */}
                        <InputDate
                            max={30}
                            onChange={this.handleChange}
                            name="value"
                            value={this.state.value}
                        />
                    </div>
                </div>
            </div>
        )
    }
}