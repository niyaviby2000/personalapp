import React from 'react'
import profilepicture from './assets/images/profilepic.jpg'

function Hero() {
    return (
        <div>
            <div class="container-fluid bg-info d-flex align-items-center mb-3 py-5" id="home" style={{"minHeight":"100vh"}}>
            <div class="container">
                <div class="row align-items-center">
    
                    <div class="col-lg-6 text-center text-lg-left">
                        <h3 class="text-white font-weight-normal mb-3">Hello, my name</h3>
                        <h1 class="text-white text-uppercase fw-bold mb-2" >Niya Viby</h1>
                        <h1 class="typed-text-output d-inline font-weight-lighter text-white"></h1>
                        <div class="typed-text text-white">Software Developer</div>
                        <div class="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                            <button type="submit" class="btn btn-white mr-4">Download CV</button>
    
                            <button type="submit" class="btn btn-blue d-none d-sm-block">Play Video</button>
                        </div>
                    </div>
                    <div class="col-lg-6 px-8 pl-lg-0 pb-5 pb-lg-4 about-img">
                        <img class="img-fluid w-100 rounded-circle shadow-sm" src={profilepicture} alt="" />
                    </div>
                </div>
            </div>
        </div>
          
        </div>
      )
}

export default Hero
