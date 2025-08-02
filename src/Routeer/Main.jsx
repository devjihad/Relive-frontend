import { Outlet } from "react-router";
import Nav from "../HeaderFooter/Nav";
import Footer from "../HeaderFooter/Footer";


const Main = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;