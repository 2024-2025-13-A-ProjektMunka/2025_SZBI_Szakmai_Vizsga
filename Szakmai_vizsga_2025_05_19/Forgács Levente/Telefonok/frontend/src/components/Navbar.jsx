import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CounterContext } from '../context/CounterContext';

const Navbar = () => {
    const { szamlalo } = useContext(CounterContext);

    let szam = 0;

    const becsuk = () => {
        let navbar_elrejt = document.querySelector('.navbar-elrejt');
        let felfedes = document.querySelector('.felfedes');
        if (szam % 2 === 0) {
            navbar_elrejt.classList.add('felfedes');
            navbar_elrejt.classList.remove('navbar-elrejt');
        } else {
            felfedes.classList.add('navbar-elrejt');
            felfedes.classList.remove('felfedes');
        }
        szam++;
    };

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <span className="material-symbols-outlined">smartphone</span>
            </div>
            <div className="navbar-kategoriak">
                <div className="navbar-kosar">
                    <Link to="/cart">
                        <span className="material-symbols-outlined">
                            <i class="material-icons">shopping_cart</i>
                        </span>
                    </Link>
                    <span className="navbar-szamlalo">{szamlalo}</span>
                </div>
                <div className="navbar-elrejt">
                    <Link to="/"><i class="material-icons">Home</i></Link>
                    <Link to="/samsung">Samsung</Link>
                    <Link to="/iphone">IPhone</Link>
                </div>
                <span
                    className="material-symbols-outlined becsuk"
                    onClick={becsuk}
                >
                    menu
                </span>
            </div>
        </div>
    );
};

export default Navbar;
