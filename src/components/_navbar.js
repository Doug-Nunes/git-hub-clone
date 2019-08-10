import React from 'react';
import Logo from "./../assets/images/logo.svg";


class Navbar extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/"><img src={Logo}></img></a>

                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li><a href="/pull-request">Pull Request</a></li>
                                <li><a href="/issues">issues</a></li>
                                <li><a href="/MarketPlace">Marketplace</a></li>
                                <li><a href="/explore">Explore</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="/sign-in" > Sign-in</a></li>
                                <li><a href="/sign-up" > Sign-up</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}
export default Navbar;
