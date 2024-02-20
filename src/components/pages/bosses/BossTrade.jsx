import Select from "../../forms/Select.jsx";

import { BOSSES } from "../../../datas/BOSSES.js";

import { useState } from "react";
import ShowBoss from "./ShowBoss.jsx";
import Pannel from "../../Pannel.jsx";
import { useTranslation } from "react-i18next";

export default function BossTrade() {
  const { t } = useTranslation();
  const [activeName, setActiveName] = useState("");

  return (
    <div className="">
    <Pannel 
      title={t('pannel_title_bosses')}
      infos={t('pannel_info_bosses')}/>
      <div className="">
        <Select
            data={BOSSES}
            selectName={t('choose_boss')}
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
                  map={boss.map}
                  image={boss.image}
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
