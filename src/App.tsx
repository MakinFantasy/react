import './App.css'
import Data from "./components/Data";
import {useState} from "react";
import Navbar from "./components/Navbar";
import MainRouter from "./components/MainRouter";

function App() {


    const [isAuth, setIsAuth] = useState(false);


    return (
        <>
            <Navbar/>
            <MainRouter isAuth={isAuth}/>
            <Data/>
        </>
    )
}

export default App
