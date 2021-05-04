import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import * as RB from "react-bootstrap";

function MenuComponent(props){

    if(props.loggedIn){
        return(
            <RB.Navbar bg="dark" variant="dark">
                
                <RB.Navbar.Brand href="/">mStock App</RB.Navbar.Brand>
                <RB.Nav.Link href="/companies">Companies</RB.Nav.Link>
                <RB.Nav.Link href="/watchlist">Watch List</RB.Nav.Link>
                <RB.Nav.Link href="/compareperformance">Compare Performance</RB.Nav.Link>
                <RB.Nav.Link href="/login">Logout</RB.Nav.Link>
            </RB.Navbar>
        )
    }
    else{
        return(
            <RB.Navbar bg="dark" variant="dark">
                
                <RB.Navbar.Brand href="/">mStock App</RB.Navbar.Brand>
                <RB.Nav.Link href="/login">Login</RB.Nav.Link>
                <RB.Nav.Link href="/companies">Companies</RB.Nav.Link>
            </RB.Navbar>
        )
    }

}

export default MenuComponent

