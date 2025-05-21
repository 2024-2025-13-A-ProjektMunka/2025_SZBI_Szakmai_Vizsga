import { useContext, useEffect, useState } from 'react';
import { CounterContext } from '../context/CounterContext';

const Xiaomi = () => {
    const [xiaomik, setXiaomik] = useState([]);
    const [darabszam, setDarabszam] = useState([]);
    const { szamlalo, setSzamlalo, betoltes, vasarlas, setVasarlas } =
        useContext(CounterContext);

    useEffect(() => {
        console.log(vasarlas);
        let tomb = [];
        let tombD = [];

        for (let i = 0; i < betoltes.length; i++) {
            if (betoltes[i].tipus === 'xiaomi') {
                tomb.push(betoltes[i].fajta);
                let vanE = false;
                for (let j = 0; j < vasarlas.length; j++) {
                    if (
                        betoltes[i].fajta.xiaomi_tipus ===
                        vasarlas[j].fajta.xiaomi_tipus
                    ) {
                        tombD.push(vasarlas[j].darabszam);
                        vanE = true;
                    }
                }

                if (!vanE) tombD.push(betoltes[i].darabszam);
            }
        }

        setXiaomik(tomb);
        setDarabszam(tombD);
    }, []);

    function csokkent(elem, i) {
        let szam = szamlalo;
        let tomb = [];
        for (let j = 0; j < xiaomik.length; j++) {
            if (darabszam[j] > 0 && i === j) {
                tomb.push(darabszam[j] - 1);
            } else tomb.push(darabszam[j]);
        }

        setDarabszam(tomb);

        let xiamoiZ = [];

        for (let i = 0; i < vasarlas.length; i++) {
            if (
                vasarlas[i].fajta.xiaomi_tipus === elem.xiaomi_tipus &&
                vasarlas[i].darabszam > 0
            ) {
                let obj = {
                    tipus: 'xiaomi',
                    fajta: elem,
                    darabszam: vasarlas[i].darabszam - 1,
                };
                if (vasarlas[i].darabszam - 1 === 0) szam--;
                else xiaomiZ.push(obj);
            } else {
                xiaomiZ.push(vasarlas[i]);
            }
        }

        setVasarlas(xiaomiZ);
        setSzamlalo(szam);
    }

    function novel(elem, i) {
        let szam = szamlalo;
        let tomb = [];
        for (let j = 0; j < xiaomik.length; j++) {
            if (i === j) {
                tomb.push(darabszam[j] + 1);
            } else tomb.push(darabszam[j]);
        }

        setDarabszam(tomb);

        let xiaomiZ = [];
        let vanE = false;

        for (let i = 0; i < vasarlas.length; i++) {
            if (vasarlas[i].fajta.xiaomi_tipus === elem.xiaomi_tipus) {
                let obj = {
                    tipus: 'xiaomi',
                    fajta: elem,
                    darabszam: vasarlas[i].darabszam + 1,
                };
                xiaomiZ.push(obj);
                vanE = true;
            } else {
                xiaomiZ.push(vasarlas[i]);
            }
        }

        if (!vanE) {
            szam++;
            let obj = {
                tipus: 'xiaomi',
                fajta: elem,
                darabszam: 1,
            };
            xiaomiZ.push(obj);
        }

        setVasarlas(xiaomiZ);
        setSzamlalo(szam);
    }

    return (
        <div className="xiaomik-container">
            <div className="xiaomik-kontener">
                {xiaomik.map((elem, index) => (
                    <div
                        className="xiaomi-container"
                        key={index}
                    >
                        <div className="xiaomi-kep">
                            <img
                                src={`/images/xiaomi/${elem.xiaomi_tipus}.jpg`}
                            />
                        </div>
                        <div className="xiaomi-leiras">
                            <p>Mobil típusa: {elem.xiaomi_tipus}</p>
                            <p>
                                Maximális memória: {elem.xiaomi_max_memoria} GB
                            </p>
                            <p>
                                Mennyiségi ár: {elem.xiaomi_mennyisegi_ar} Ft
                            </p>

                            <div className="xiaomik-szamlalo">
                                <span
                                    className="material-symbols-outlined"
                                    onClick={() => csokkent(elem, index)}
                                >
                                    remove
                                </span>
                                <span className="darabszam">
                                    {darabszam[index]}
                                </span>
                                <span
                                    className="material-symbols-outlined"
                                    onClick={() => novel(elem, index)}
                                >
                                    add
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Xiaomi;