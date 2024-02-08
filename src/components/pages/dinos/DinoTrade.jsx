import Select from "../../forms/Select.jsx";
import Form from "../../forms/Form.jsx";

import ShowDinoPrice from "./ShowDinoPrice.jsx";

import { DINOS } from "../../../datas/DINOS.js";

import { useState } from "react";
import Pannel from "../../Pannel.jsx";

import {calcPrice} from "./functions/calcPrice.js";

export default function DinoTrade() {
  const [activeName, setActiveName] = useState("");

  const [stat1, setStat1] = useState("");
  const [stat2, setStat2] = useState("");
  const [stat3, setStat3] = useState("");
  const [stat4, setStat4] = useState("");

  function resetForm() {
    setStat1("");
    setStat2("");
    setStat3("");
    setStat4("");
  }

  return (
    <div>
      <Pannel 
        title='dino trading'
        infos='Renseignez les stats demandées'/>
      <div>
        <Select
          data={DINOS}
          selectName='Choose dino'
          activeName={activeName}
          onChange={(e) => {
            setActiveName(e.target.value);
            resetForm();
          }}
        />
        {DINOS.map((dino) =>
          activeName === dino.name ? (
            <div key={dino.id}>
              <Form
                dino={dino}
                value={dino.stat1}
                setStat1={(e) => setStat1(e.target.value)}
                setStat2={(e) => setStat2(e.target.value)}
                setStat3={(e) => setStat3(e.target.value)}
                setStat4={(e) => setStat4(e.target.value)}
              />
               <div>
                <ShowDinoPrice 
                  name={dino.name}
                  category={dino.category}
                  // add ternary operator ; if nameStat1 === '', only show prices
                  price={calcPrice(dino.price, stat1, stat2, stat3, stat4)}
                  neutedPrice={calcPrice(dino.neutedPrice, stat1, stat2, stat3, stat4)}
                />
               </div>
            </div>
          ) : null
        )}
      </div>
    </div> // Last div
  );
}
