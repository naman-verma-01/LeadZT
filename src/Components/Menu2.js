import React, { useState, useEffect } from 'react'

function Menu2(props) {
    const [readMore, setReadMore] = useState(false)

    const readMoreToggle = () => {

        setReadMore(!readMore)

    }


    return (
        <div id={props.element.id} className={`singleCard2 ${props.element.id}`}>
            <div className="singleCardInitial">
                <div>
                    {props.element.name}
                </div>
                <div>
                    <h4>Contact</h4><br />
                    {props.element.phone}
                </div>
                <div>
                    <h4>City</h4><br />
                    {props.element.address.city}
                </div>
                <div>
                    <h4>Street</h4><br />
                    {props.element.address.street} <br />
                </div>
               
            </div>
            {!readMore? 
                    <div className='readMoreButton' onClick={readMoreToggle}>More</div>
                    :<div className='readMoreButton' onClick={readMoreToggle}>Less</div>
                }
            {readMore ? <> <br />
                <div className='singleCardInitial'>
                    <div className="">
                        <div>
                            <h4>ID</h4>
                            {props.element.id} <br /><br />
                        </div>
                        <div>
                            <h4>Username</h4>
                            {props.element.username}<br /><br />
                        </div>
                        <div>
                            <h4>Email</h4>
                            {props.element.email}<br /><br />
                        </div>
                        <div>
                            <h4>Website</h4>
                            {props.element.website}<br /><br />
                        </div>

                    </div>
                    <div className="">
                        <div>
                            <h4>Company</h4>
                            {props.element.company.name}<br /><br />
                        </div>
                        <div>
                            <h4>Catch Phrase</h4>
                            {props.element.company.catchPhrase}<br /><br />
                        </div>
                        <div>
                            <h4>Suit</h4>
                            {props.element.address.suite}<br /><br />
                        </div>
                        <div>
                            <h4>Zipcode</h4>
                            {props.element.address.zipcode} <br /><br />
                        </div>
                    </div>
                </div>

            </>
                :
                null}
        </div>
    )
}

export default Menu2