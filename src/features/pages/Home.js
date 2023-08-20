import { ProductList } from "../product-list/ProductList";
import Navbar from "../navbar/Navbar";
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