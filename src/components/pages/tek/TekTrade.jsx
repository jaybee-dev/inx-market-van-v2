import Select from "../../forms/Select.jsx";

import { TEK } from "../../../datas/TEK.js";

import { useState } from "react";
import ShowTek from "./ShowTek.jsx";
import Pannel from "../../Pannel.jsx";
import { useTranslation } from "react-i18next";

export default function TekTrade() {
  const { t } = useTranslation();
  const [activeName, setActiveName] = useState("");

  return (
    <div>
    <Pannel 
      title={t('pannel_title_tek')}
      infos={t('pannel_info_tek')}/>
      <div>
        <Select
            data={TEK}
            selectName={t('choose_tek')}
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
