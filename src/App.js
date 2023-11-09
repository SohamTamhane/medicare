import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import AppContext from "./config/Context";
import YourMedicine from "./components/Dashboard/YourMedicine";
import ViewQuantity from "./components/Dashboard/ViewQuantity";
import ViewAccount from "./components/Dashboard/ViewAccount";

function App() {
    return (
        <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
            <AppContext>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/dashboard/medicines' element={<YourMedicine />} />
                    <Route path='/dashboard/qty' element={<ViewQuantity />} />
                    <Route path='/dashboard/account' element={<ViewAccount />} />
                    <Route path='*' element={<Error />} />
                </Routes>
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;