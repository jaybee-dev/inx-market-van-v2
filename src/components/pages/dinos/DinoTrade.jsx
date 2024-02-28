import { useState } from "react";
import { useTranslation } from "react-i18next";

import Pannel from "../../Pannel.jsx";
import Select from "../../forms/Select.jsx";
import Form from "../../forms/Form.jsx";
import ShowDino from "./ShowDino.jsx";

import { DINOS } from "../../../datas/DINOS.js";

import {calcPrice} from "./functions/calcPrice.js";

export default function DinoTrade() {
  const { t } = useTranslation()

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
        title={t('pannel_title_dinos')}
        infos={t('pannel_info_dinos')}/>
      <div>
        <Select
          data={DINOS}
          selectName={t('choose_dino')}
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
              {dino.neutedPrice ? 
               <div>
                <ShowDino 
                  category={dino.category}
                  price={calcPrice(dino.price, stat1, stat2, stat3, stat4)}
                  neutedPrice={calcPrice(dino.neutedPrice, stat1, stat2, stat3, stat4)}
                />             
               </div> : 
               <div className="text-center"><span>{t('unique_price')}: {dino.price}</span></div>
              }
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
