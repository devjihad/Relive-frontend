import Nav from "../HeaderFooter/Nav";
import GetTouch from "./GetTouch";
import Home1 from "./Home1";
import Landing from "./Landing";
import Product from "./Product";
import Treatment from "./Treatment";


const MainHome = () => {
    return (
        <div>
            <Landing/>
            <Home1/>
            <Product/>
            <Treatment/>
            <GetTouch/>

        </div>
    );
};

export default MainHome;