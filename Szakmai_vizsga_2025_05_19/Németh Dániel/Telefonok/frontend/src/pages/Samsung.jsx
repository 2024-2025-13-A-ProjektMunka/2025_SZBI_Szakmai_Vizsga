import { useContext, useEffect, useState } from 'react';
import { CounterContext } from '../context/CounterContext';

const Samsung = () => {
    const [samsungok, setSamsungok] = useState([]);
    const [darabszam, setDarabszam] = useState([]);
    const { szamlalo, setSzamlalo, betoltes, vasarlas, setVasarlas } =
        useContext(CounterContext);

    useEffect(() => {
        console.log(vasarlas);
        let tomb = [];
        let tombD = [];

        for (let i = 0; i < betoltes.length; i++) {
            if (betoltes[i].tipus === 'samsung') {
                tomb.push(betoltes[i].fajta);
                let vanE = false;
                for (let j = 0; j < vasarlas.length; j++) {
                    if (
                        betoltes[i].fajta.samsung_tipus ===
                        vasarlas[j].fajta.samsung_tipus
                    ) {
                        tombD.push(vasarlas[j].darabszam);
                        vanE = true;
                    }
                }

                if (!vanE) tombD.push(betoltes[i].darabszam);
            }
        }

        setSamsungok(tomb);
        setDarabszam(tombD);
    }, []);

    function csokkent(elem, i) {
        let szam = szamlalo;
        let tomb = [];
        for (let j = 0; j < samsungok.length; j++) {
            if (darabszam[j] > 0 && i === j) {
                tomb.push(darabszam[j] - 1);
            } else tomb.push(darabszam[j]);
        }

        setDarabszam(tomb);

        let samsungZ = [];

        for (let i = 0; i < vasarlas.length; i++) {
            if (
                vasarlas[i].fajta.samsung_tipus === elem.samsung_tipus &&
                vasarlas[i].darabszam > 0
            ) {
                let obj = {
                    tipus: 'samsung',
                    fajta: elem,
                    darabszam: vasarlas[i].darabszam - 1,
                };
                if (vasarlas[i].darabszam - 1 === 0) szam--;
                else samsungZ.push(obj);
            } else {
                samsungZ.push(vasarlas[i]);
            }
        }

        setVasarlas(samsungZ);
        setSzamlalo(szam);
    }

    function novel(elem, i) {
        let szam = szamlalo;
        let tomb = [];
        for (let j = 0; j < samsungok.length; j++) {
            if (i === j) {
                tomb.push(darabszam[j] + 1);
            } else tomb.push(darabszam[j]);
        }

        setDarabszam(tomb);

        let samsungZ = [];
        let vanE = false;

        for (let i = 0; i < vasarlas.length; i++) {
            if (vasarlas[i].fajta.samsung_tipus === elem.samsung_tipus) {
                let obj = {
                    tipus: 'samsung',
                    fajta: elem,
                    darabszam: vasarlas[i].darabszam + 1,
                };
                samsungZ.push(obj);
                vanE = true;
            } else {
                samsungZ.push(vasarlas[i]);
            }
        }

        if (!vanE) {
            szam++;
            let obj = {
                tipus: 'samsung',
                fajta: elem,
                darabszam: 1,
            };
            samsungZ.push(obj);
        }

        setVasarlas(samsungZ);
        setSzamlalo(szam);
    }

    return (
        <div className="samsungok-container">
            <div className="samsungok-kontener">
                {samsungok.map((elem, index) => (
                    <div
                        className="samsung-container"
                        key={index}
                    >
                        <div className="samsung-kep">
                            <img
                                src={`/images/samsung/${elem.samsung_tipus}.jpg`}
                            />
                        </div>
                        <div className="samsung-leiras">
                            <p>Mobil típusa: {elem.samsung_tipus}</p>
                            <p>
                                Maximális memória: {elem.samsung_max_memoria} GB
                            </p>
                            <p>
                                Mennyiségi ár: {elem.samsung_mennyisegi_ar} Ft
                            </p>

                            <div className="samsungok-szamlalo">
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

export default Samsung;
