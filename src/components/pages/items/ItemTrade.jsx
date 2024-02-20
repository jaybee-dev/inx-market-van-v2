import Select from "../../forms/Select.jsx";
import Pannel from "../../Pannel.jsx";

import { ITEMS } from "../../../datas/ITEMS.js";

import { useState } from "react";
import ShowItem from "./ShowItem.jsx";
import { useTranslation } from "react-i18next";

export default function ItemTrade() {
  const { t } = useTranslation();
  const [activeName, setActiveName] = useState("");

  return (
    <div>
      <Pannel 
        title={t('pannel_title_items')}
        infos={t('pannel_info_items')}/>
      <div className="">
        <Select
            data={ITEMS}
            selectName={t('choose_item')}
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
