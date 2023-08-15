import React from 'react'
import ReactDOM from 'react-dom/client'
import NavbarComponent from "./components/NavbarComponent";
import BodyComponent from "./components/BodyComponent";
import {useState} from "react"


const App = () => {

    return (
        <>
            <BodyComponent/>
        </>
    )
}












const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)