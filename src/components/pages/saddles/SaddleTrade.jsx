import Select from "../../forms/Select.jsx";

import { SADDLES } from "../../../datas/SADDLES.js";

import { useState } from "react";
import ShowSaddle from "./ShowSaddle.jsx";
import Pannel from "../../Pannel.jsx";

export default function SaddleTrade() {
  const [activeName, setActiveName] = useState("");

  return (
    <div className="">
    <Pannel 
      title='saddle trading'
      infos=''/>
      <div className="">
        <Select
            data={SADDLES}
            selectName='Choose saddle'
            activeName={activeName}
            onChange={(e) => {
                setActiveName(e.target.value);
            }}
        />
        {SADDLES.map((saddle) =>
          activeName === saddle.name ? (
            <div key={saddle.id}>
              <div>
                <ShowSaddle
                  name={saddle.name}
                  details={saddle.details}
                  price={saddle.price}
                />
              </div>
            </div>
          ) : null
        )}
      </div>
    </div> // Last div
  );
}
