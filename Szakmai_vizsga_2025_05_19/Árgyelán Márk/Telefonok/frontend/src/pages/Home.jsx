import { Link } from 'react-router-dom';

const Home = () => {
    return (
                   <div className="home-kategoriak">
                <div className="home-kategoria">
                    <Link to="/samsung">Samsung</Link>
                </div>
                <div className="home-kategoria">
                    <Link to="/iphone">IPhone</Link>
                </div>
                <div className="home-kategoria">
                    <Link to="/xiaomi">Xiaomi</Link>
                </div>
                <div className="home-kategoria">
                    <Link to="/cart">Kosár</Link>
                </div>
            </div>
        
    );
};

export default Home;
