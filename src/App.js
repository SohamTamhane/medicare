import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
    return (
        <BrowserRouter basename="/medicare">
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;