import Select from "../../forms/Select.jsx";

import { ITEMS } from "../../../datas/ITEMS.js";

import { useState } from "react";
import ShowItem from "./ShowItem.jsx";

export default function ItemTrade() {
  const [activeName, setActiveName] = useState("");

  return (
    <div className="">
      <div className="">
        <Select
            data={ITEMS}
            selectName='Choose item'
            activeName={activeName}
            onChange={(e) => {
                setActiveName(e.target.value);
            }}
        />
        {ITEMS.map((item) =>
          activeName === item.name ? (
            <div key={item.id}>
              <div>
                <ShowItem
                  name={item.name}
                  type={item.category}
                  amount={item.amount}
                  details={item.details}
                  price={item.price}
                />
              </div>
            </div>
          ) : null
        )}
      </div>
    </div> // Last div
  );
}
