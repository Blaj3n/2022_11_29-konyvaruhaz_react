import { useState } from "react";
import "./App.css";
import Konyv from "./Konyv";

const konyvTomb = [
  {
    cim: "Malevil",
    szerzo: "Robert Merle",
    ar: 2111,
  },
  {
    cim: "Védett férfiak",
    szerzo: "Robert Merle",
    ar: 1111,
  },
  {
    cim: "Állati elmék",
    szerzo: "Robert Merle",
    ar: 3111,
  },
];

function App() {
  /*state - reprezentálják az oldal állapotát
   * és befrissítik az oldal vonatkozó részét
   */
  const [db, setDb] = useState(0);
  const [osszAr, setOsszar] = useState(0);
  const [kosaram, setKosaram] = useState([]);
  function kosarKezeles(adat) {
    /*Számoljuk meg, hány könyvet tettünk a kosárba */
    setDb(db + 1);
    /*összár */
    setOsszar(osszAr + adat.ar);
    kosaram.push(adat);
    setKosaram(kosaram);
    console.log(kosaram);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1>
      </header>
      <section>
        <p>A Könyvek darabszáma: {db}</p>
        <p>A Könyvek összára: {osszAr}</p>
      </section>
      <article>
        {konyvTomb.map((konyv, index) => {
          return (
            <Konyv konyvObj={konyv} key={index} kosarKezeles={kosarKezeles} />
          );
        })}
      </article>
      <footer>
        <p>saját név</p>
      </footer>
    </div>
  );
}

export default App;
