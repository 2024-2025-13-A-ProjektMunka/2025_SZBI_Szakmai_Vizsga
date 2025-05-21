import { useContext, useEffect, useState } from 'react';
import { CounterContext } from '../context/CounterContext';

const Cart = () => {
    const [vegosszeg, setVegosszeg] = useState(0);
    const { setSzamlalo, vasarlas, setVasarlas } = useContext(CounterContext);

    useEffect(() => {
        console.log(vasarlas);
        let osszeg = 0;
        for (let i = 0; i < vasarlas.length; i++) {
            if (vasarlas[i].tipus === 'samsung') {
                osszeg +=
                    vasarlas[i].darabszam *
                    vasarlas[i].fajta.samsung_mennyisegi_ar;
            } else if (vasarlas[i].tipus === 'iphone') {
                osszeg +=
                    vasarlas[i].darabszam *
                    vasarlas[i].fajta.iphone_mennyisegi_ar;
            } else {
                osszeg +=
                    vasarlas[i].darabszam *
                    vasarlas[i].fajta.xiaomi_mennyisegi_ar;
            }
        }
        setVegosszeg(osszeg);
    }, []);

    const fizetes = () => {
        setVasarlas([]);
        setSzamlalo(0);
        setVegosszeg(0);
    };

    return (
        <div className="kosar-container">
            <div className="kosar-kontener">
                {vasarlas.map((elem, index) => (
                    <div
                        className="kosar-elem"
                        key={index}
                    >
                        <h1>
                            {elem.tipus === 'samsung'
                                ? elem.fajta.samsung_tipus
                                : elem.tipus === 'iphone'
                                ? elem.fajta.iphone_tipus
                                : elem.fajta.xiaomi_tipus}
                        </h1>
                        {elem.tipus === 'samsung' ? (
                            <div>
                                <img
                                    src={`/images/samsung/${elem.fajta.samsung_tipus}.jpg`}
                                />
                                <p>
                                    Maximális memória:{' '}
                                    {elem.fajta.samsung_max_memoria}
                                </p>
                                <p>
                                    Mennyiségi ár:{' '}
                                    {elem.fajta.samsung_mennyisegi_ar} Ft
                                </p>
                                <p>Mennyiség: {elem.darabszam}</p>
                            </div>
                        ) : elem.tipus === 'iphone' ? (
                            <div>
                                <img
                                    src={`/images/iphone/${elem.fajta.iphone_tipus}.jpg`}
                                />
                                <p>
                                    Maximális memória:{' '}
                                    {elem.fajta.iphone_max_memoria}
                                </p>
                                <p>
                                    Mennyiségi ár:{' '}
                                    {elem.fajta.iphone_mennyisegi_ar} Ft
                                </p>
                                <p>Mennyiség: {elem.darabszam}</p>
                            </div>
                        ) : (
                            <div>
                                <img
                                    src={`/images/xiaomi/${elem.fajta.xiaomi_tipus}.jpg`}
                                />
                                <p>
                                    Maximális memória:{' '}
                                    {elem.fajta.xiaomi_max_memoria}
                                </p>
                                <p>
                                    Mennyiségi ár:{' '}
                                    {elem.fajta.xiaomi_mennyisegi_ar} Ft
                                </p>
                                <p>Mennyiség: {elem.darabszam}</p>
                            </div>
                        )}
                    </div>
                ))}
                <div className="kosar-elem">
                    <h1>Fizetendő: {vegosszeg} Ft</h1>
                    <button onClick={fizetes}>Fizetés</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
