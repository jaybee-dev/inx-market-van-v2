import Input from "./Input.jsx";
import stat_dmg from "../../assets/images/stat_dmg.webp"
import stat_health from "../../assets/images/stat_health.webp"
import stat_stam from "../../assets/images/stat_stam.webp"
import stat_weight from "../../assets/images/stat_weight.webp"
import stat_food from "../../assets/images/stat_food.webp"
import stat_oxy from "../../assets/images/stat_oxy.webp"
import stat_charge from "../../assets/images/stat_charge.webp"
import stat_useful from "../../assets/images/stat_useful.png"


/**
 * @param {string} nameStat1
 */

// Faire une fonction qui liste le nombre de statistiques qui ne sont pas null ou '' et afficher le nombre d'Input en conséquence

const statsIco = {stat_dmg, stat_health, stat_stam, stat_weight, stat_food, stat_oxy, stat_charge, stat_useful}
const ico = "w-6 h-6 text-center m-2"
const statItem = "flex place-content-center"

export default function Form({ dino, setStat1, setStat2, setStat3, setStat4 }) {
  return (
    <div className="text-center p-2">
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
