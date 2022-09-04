import React, { useState, useRef, useEffect } from 'react'
import propTypes from "prop-types"
import { DateRange } from "react-date-range"
import "./index.scss"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { formatDate } from "utils"


export default function InputDate(props) {
    const refDate = useRef(null)
    const { value, placeholder, name } = props;
    const [isShowed, setIsShowed] = useState(false);

    console.log(formatDate(value.startDate))

    const datePickerChange = value => {
        const target = {
            target: {
                value: value.selection,
                name: name
            }
        };
        props.onChange(target)
    }

    const handleClickOutside = event => {
        if (refDate && !refDate.current.contains(event.target)) {
            setIsShowed(false);
        }
    }

    const check = focus => {
        focus.indexOf(1) < 0 && setIsShowed(false);
    }

    const displayDate = `${value.startDate ? formatDate(value.startDate) : ""} ${value.endDate ? "_" + formatDate(value.endDate) : ""}`

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    })


    return (
        <div ref={refDate} className={["input-date mb-3", props.outerClassName].join("")}>
            <div className='input-group'>
                <div className='input-group-prepend bg-gray-900'>
                    <span className='input-group-text'>
                        <i className="ri-calendar-todo-line" />
                    </span>
                </div>
                <input
                    readOnly
                    type="text"
                    className="form-control"
                    value={displayDate}
                    placeholder={placeholder}
                    onClick={() => setIsShowed(!isShowed)}
                />

                {isShowed && (
                    <div className='date-range-wrapper'>
                        <DateRange
                            editableDateInputs={true}
                            onChange={datePickerChange}
                            moveRangeOnFirstSelection={false}
                            onRangeFocusChange={check}
                            ranges={[value]}
                        />
                    </div>
                )}

            </div>

        </div>
    )
}

InputDate.propTypes = {
    value: propTypes.object,
    onChange: propTypes.func,
    name: propTypes.string,
    placeholder: propTypes.string,
    outerClassName: propTypes.string
}
