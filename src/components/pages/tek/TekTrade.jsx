import Select from "../../forms/Select.jsx";

import { TEK } from "../../../datas/TEK.js";

import { useState } from "react";
import ShowTek from "./ShowTek.jsx";
import Pannel from "../../Pannel.jsx";

export default function TekTrade() {
  const [activeName, setActiveName] = useState("");

  return (
    <div className="">
    <Pannel 
      title='tek trading'
      infos=''/>
      <div className="">
        <Select
            data={TEK}
            selectName='Choose Tek item'
            activeName={activeName}
            onChange={(e) => {
                setActiveName(e.target.value);
            }}
        />
        {TEK.map((tek) =>
          activeName === tek.name ? (
            <div key={tek.id}>
              <div>
                <ShowTek
                  name={tek.name}
                  details={tek.details}
                  amount={tek.amount}
                  price={tek.price}
                />
              </div>
            </div>
          ) : null
        )}
      </div>
    </div> // Last div
  );
}
