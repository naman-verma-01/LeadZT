import React, { useState,useEffect } from 'react'

function Menu(props) {
    const [readMore, setReadMore] = useState(false)

    const readMoreToggle = () => {
       
        setReadMore(!readMore)

    }

   
    return (
        <div id={props.element.id} className={`singleCard ${props.element.id}`}>
            <div className="singleCardInitial">
                <div>
                    <h5>{props.element.name}</h5>
                </div>
                <div>
                    Temp. &nbsp;{props.element.phone} <br />
                    Wind &nbsp;{props.element.address.city}
                </div>
                <div>
                    Wind &nbsp;{props.element.address.street} <br />
                </div>
                <div onClick={readMoreToggle}>Read More</div>
            </div>

            {readMore ? <> <br />
                <div>
                    <h5>{props.element.name}</h5>
                </div>
                <div>
                    <h5>{props.element.name}</h5>
                </div>
                <div>
                    <h5>{props.element.name}</h5>
                </div>
                <div>
                    <h5>{props.element.name}</h5>
                </div></>
                :
                null}
        </div>
    )
}

export default Menu