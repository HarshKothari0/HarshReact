import React from 'react';
import "./style.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import DisplayComponent from "./DisplayComponent";
import UpdateComponent from "./UpdateComponent";
import AddComponent from "./AddComponent";

export default function MainComponent() {

        return (
            <BrowserRouter>
                <div>
                    <HeaderComponent></HeaderComponent>
                    <ContentComponent></ContentComponent>
                </div>
            </BrowserRouter>
        )
    
function ContentComponent() {
    return (
        <div >
            <Route exact path="/" component={DisplayComponent}></Route>
            <Route exact path="/add" component={AddComponent}></Route>
            <Route exact path="/update/:hid" component={UpdateComponent}></Route>
        </div>
    )
}

function HeaderComponent() {
    return (
        <div>
            <ul>
                <li><Link className="" to="/">View Hotels</Link></li>
                <li><Link to="add">Add Hotel</Link></li>
            </ul>
        </div>
    )
}
}

