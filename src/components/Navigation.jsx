import {Link} from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi"

function Navigation() {
    return (
        <section className={'wrapper navigation'}>
            <Link to={'/'}>
                <h2>Clothes store</h2>
            </Link>
            <Link to={'/checkout'}>
                <div className={'cart'}>
                    <HiShoppingCart/>
                    <span>0</span>
                </div>
            </Link>
        </section>
    );
}

export default Navigation;

