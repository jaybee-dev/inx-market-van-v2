import Input from "./Input.jsx";
import stat_dmg from "../../assets/images/stat_dmg_black.webp"
import stat_health from "../../assets/images/stat_health_black.webp"
import stat_stam from "../../assets/images/stat_stam_black.webp"
import stat_weight from "../../assets/images/stat_weight_black.webp"
import stat_food from "../../assets/images/stat_food_black.webp"
import stat_oxy from "../../assets/images/stat_oxy_black.webp"
import stat_charge from "../../assets/images/stat_charge_black.webp"
import stat_useful from "../../assets/images/stat_useful_black.webp"


/**
 * @param {string} nameStat1
 */

// Faire une fonction qui liste le nombre de statistiques qui ne sont pas null ou '' et afficher le nombre d'Input en conséquence

const statsIco = {stat_dmg, stat_health, stat_stam, stat_weight, stat_food, stat_oxy, stat_charge, stat_useful}
const ico = "w-8 h-8 m-2 dark:invert"
const statItem = "flex justify-center items-center bg-success my-2"

export default function Form({ dino, setStat1, setStat2, setStat3, setStat4 }) {
  return (
    <div className="bg-info p-4 rounded">
      {dino.nameStat1 === '' ? null : (
      <div className={statItem}>
        <img className={ico} alt={dino.nameStat1} src={statsIco[dino.nameStat1]}/>
        <Input
          label={dino.nameStat1}
          value={dino.stat1}
          placeholder={dino.nameStat1}
          onChange={setStat1}
        />
      </div>
      )}
      {dino.nameStat2 === "" ? null : (
        <div className={statItem}>
          <img className={ico} alt={dino.nameStat2} src={statsIco[dino.nameStat2]}/>
          <Input
            label={dino.nameStat2}
            value={dino.stat2}
            placeholder={dino.nameStat2}
            onChange={setStat2}
        />
        </div>
      )}
      {dino.nameStat3 === "" ? null : (
        <div className={statItem}>
          <img className={ico} alt={dino.nameStat3} src={statsIco[dino.nameStat3]}/>
          <Input
            label={dino.nameStat3}
            value={dino.stat3}
            placeholder={dino.nameStat3}
            onChange={setStat3}
          />
        </div>
      )}
      {dino.nameStat4 === "" ? null : (
        <div className={statItem}>
          <img className={ico} alt={dino.nameStat4} src={statsIco[dino.nameStat4]}/>
          <Input
            label={dino.nameStat4}
            value={dino.stat4}
            placeholder={dino.nameStat4}
            onChange={setStat4}
          />
        </div>
      )}
    </div>
  );
}
