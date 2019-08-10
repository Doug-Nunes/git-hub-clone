import React from 'react';
import  Navbar from "./_navbar.js";
import  Footer from "./_footer.js";
import PaginaBloq from "./../assets/images/blockImage.gif"


class WorKingPage extends React.Component {
    render() {
        return (
           <div>
                <Navbar></Navbar>
                <img>{PaginaBloq}</img>                
                <Footer></Footer>
            </div>
        )
    }
}

export default WorKingPage;
