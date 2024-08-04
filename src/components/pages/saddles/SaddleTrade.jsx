import Select from "../../forms/Select.jsx";
import { useTranslation } from "react-i18next";

import { SADDLES } from "../../../datas/SADDLES.js";

import { useState } from "react";
import ShowSaddle from "./ShowSaddle.jsx";
import Pannel from "../../Pannel.jsx";

export default function SaddleTrade() {
  const [activeName, setActiveName] = useState("");

  const { t } = useTranslation()

  return (
    <div className="">
      <Pannel 
        title={t('pannel_title_saddles')}
        infos={t('pannel_info_saddles')}/>
      <div className="">
        <Select
            data={SADDLES}
            selectName={t('choose_saddle')}
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
