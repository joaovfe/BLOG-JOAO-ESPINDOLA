import React from "react";
import ViewMyWorkBtn from "./ViewMyWorkBtn";
import HeaderImg from "../assets/images/joaovfe2.jpg";

function Header() {
    return (
        <header className="pt-5" id='header'>
            <div className="container py-md-5">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column align-items-start justify-content-center mt-5 mt-md-0"></div>
                    <h3 className="text-secondary fw-bold lh-1">João Vitor Figueiredo Espindola</h3>
                    <h1 className="text-capitalize text-start text-primary lh-1 mb-5">
                        Frontend/mobile <br />developer
                    </h1>
                    <ViewMyWorkBtn />
                </div>
                <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
                    <img className="img-fluid w-75 rounded-circle shadow my-5" src={HeaderImg} alt="header img" />
                </div>
            </div>
        </header>
    )
}

export default Header;