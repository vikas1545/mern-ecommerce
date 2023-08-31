import { ProductList } from "../product/components/ProductList";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
function Home() {
    return ( 
        <div>
            <Navbar>
                <ProductList/>
            </Navbar>
        </div>
     );
}

export default Home;