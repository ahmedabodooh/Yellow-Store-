import React from "react";
import './Home.css'
import logo from '../../img/logo.png'
const Home = () => {
    return (
        <>
            <header>
                <div className="container" id="home">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <h1>Discover and <br/> find your <br/> design !</h1>
                            <h5>Explore our curated collection of elegant <br/> designs of hoops, trays and flowers</h5>
                            <a href="#product"><button>order Now</button></a>
                            <a href="#about"><button>learn more</button></a>
                        </div>
                        <div className="col-md-6 mb-5">
                            <img className="logo" src={logo} alt="logo"/>
                        </div>
                    </div>
                </div>
            </header>
         </>
    )
}
export default Home;
