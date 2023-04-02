import React, { useState } from "react";

function App() {
  const [preis, setPreis] = useState("");
  const [ship, setShip] = useState("");
  const [cost, setCost] = useState("");

  const preishandler = (event) => {
    setPreis(event.target.value);
  };

  const shiphandler = (event) => {
    setShip(event.target.value);
  };

  const calculate = () => {
    const cardmarketProvision = (Number(preis) * 0.95).toFixed(2);
    const sellMarge = (
      Number(cardmarketProvision) -
      Number(cardmarketProvision) * 0.3
    ).toFixed(2);
    const sellPreis = (Number(sellMarge) - Number(ship)).toFixed(2);

    setCost(sellPreis);
  };

  return (
    <div className="calculate-container">
      <div className="action-container">
        <div className="input-container">
          <input
            type="text"
            placeholder="Karten Preis"
            value={preis}
            onChange={preishandler}
          />
          <input
            type="text"
            placeholder="Versand"
            value={ship}
            onChange={shiphandler}
          />
        </div>

        <div className="button-container">
          <button onClick={calculate}>Ergebnis</button>
        </div>
      </div>

      <div className="output-container">
        {cost && cost ? <p>{cost} €</p> : null}
      </div>
    </div>
  );
}

export default App;
