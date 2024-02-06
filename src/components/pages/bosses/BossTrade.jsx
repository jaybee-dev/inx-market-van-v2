import Select from "../../forms/Select.jsx";

import { BOSSES } from "../../../datas/BOSSES.js";

import { useState } from "react";
import ShowBoss from "./ShowBoss.jsx";
import Pannel from "../../Pannel.jsx";

export default function BossTrade() {
  const [activeName, setActiveName] = useState("");

  return (
    <div className="">
    <Pannel 
      title='boss trading'
      infos=''/>
      <div className="">
        <Select
            data={BOSSES}
            selectName='Choose boss'
            activeName={activeName}
            onChange={(e) => {
                setActiveName(e.target.value);
            }}
        />
        {BOSSES.map((boss) =>
          activeName === boss.name ? (
            <div key={boss.id}>
              <div>
                <ShowBoss
                  name={boss.name}
                  map={boss.map}
                  priceGamma={boss.priceGamma}
                  priceBeta={boss.priceBeta}
                  priceAlpha={boss.priceAlpha}
                />
              </div>
            </div>
          ) : null
        )}
      </div>
    </div> // Last div
  );
}
