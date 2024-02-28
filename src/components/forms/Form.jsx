import Input from "./Input.jsx";
import { getImgStatsURL } from "../../functions/getImgStats.js";
import { useTranslation } from "react-i18next";

/**
 * @param {string} nameStat1
 */

// Faire une fonction qui liste le nombre de statistiques qui ne sont pas null ou '' et afficher le nombre d'Input en conséquence

const ico = "w-8 h-8 m-2 dark:invert justify-self-center col-start-1 col-end-3"
const statItem = "grid grid-cols-8 justify-center items-center my-px mx-auto w-72 bg-secondary h-14 rounded-sm"

export default function Form({ dino, setStat1, setStat2, setStat3, setStat4 }) {
  const { t } = useTranslation()
  return (
    <div>
      {dino.nameStat1 === '' ? null : (
      <div className={statItem}>
        <img className={ico} alt={dino.nameStat1} src={getImgStatsURL(dino.nameStat1)}/>
        <Input
          label={t(dino.nameStat1)}
          value={dino.stat1}
          placeholder={t(dino.nameStat1)}
          onChange={setStat1}
        />
      </div>
      )}
      {dino.nameStat2 === "" ? null : (
        <div className={statItem}>
          <img className={ico} alt={dino.nameStat2} src={getImgStatsURL(dino.nameStat2)}/>
          <Input
            label={t(dino.nameStat2)}
            value={dino.stat2}
            placeholder={t(dino.nameStat2)}
            onChange={setStat2}
        />
        </div>
      )}
      {dino.nameStat3 === "" ? null : (
        <div className={statItem}>
          <img className={ico} alt={dino.nameStat3} src={getImgStatsURL(dino.nameStat3)}/>
          <Input
            label={t(dino.nameStat3)}
            value={dino.stat3}
            placeholder={t(dino.nameStat3)}
            onChange={setStat3}
          />
        </div>
      )}
      {dino.nameStat4 === "" ? null : (
        <div className={statItem}>
          <img className={ico} alt={dino.nameStat4} src={getImgStatsURL(dino.nameStat4)}/>
          <Input
            label={t(dino.nameStat4)}
            value={dino.stat4}
            placeholder={t(dino.nameStat4)}
            onChange={setStat4}
          />
        </div>
      )}
    </div>
  );
}
