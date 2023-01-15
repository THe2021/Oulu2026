import kartta from './kartta.JPG';
import { useState } from 'react'



function App() {

  

  const reseptit = [
    'Kajaani: Muikkukeitto',
    'Kuhmi: Rönttöset',
    'Paltamo: Kapakalakeitto',
    'Puolanka: Nauris-maitovelli',
    'Ristijärvi: Lammaslihavelli palvatusta lihasta',
    'Sotkamo: Nyrkkirieska',
    'Suomussalmi: Avokukko',
    'Vuolujoki: Imellysmarjapuuro'
  ]

  const [selected, setSelected] = useState(0)
  const random = () => setSelected(Math.floor(Math.random() * reseptit.length))


  return (
    <div>
        <p><h1>
          Oulu2026</h1>
        </p>
         <button onClick={random}><img src={kartta} className="App-logo" alt="kartta" width="500px" height="400px" />
         Click here 
         </button>
        <br></br>
        <h1>{reseptit[selected]}</h1>
        <br></br>
        <a href="https://www.raflaamo.fi/fi/ravintola/oulu/rosso-oulu">Rosso</a>
    </div>
  );
}

export default App;
