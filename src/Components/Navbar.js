import React from 'react'

function Navbar(props) {
    return (
        <div style={{zIndex:"101"}}>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <a class="navbar-brand" style={{ color: "white", textShadow: "0 0 1px black, 0 0 2px black, 0 0 3px black, 0 0 5px black" }} href="#">&nbsp; <b>Zoinged</b> </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                

                <div  class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul  class="navbar-nav" style={{display:'flex',justifyContent:"space-between",width:'50vw'}}>

                        <li  class="nav-item active" style={{ color: "white" }}>
                            <h6>ABOUT</h6>
                        </li>
                        <li  class="nav-item active" style={{ color: "white" }}>
                            <h6>HOME</h6>
                        </li>
                        <li class="nav-item active" style={{ color: "white" }}>
                            <h6>SERVICES</h6>
                        </li>
                        <li class="nav-item active" style={{ color: "white" }}>
                            <h6>CONTACT</h6>
                        </li>
                        <li class="nav-item active" style={{ color: "white" }}>
                            <h6>COMMUNITY</h6>
                        </li>
                        <li class="nav-item active" style={{ color: "white" }}>
                            <h6>SEE MORE</h6>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    )
}

export default Navbar