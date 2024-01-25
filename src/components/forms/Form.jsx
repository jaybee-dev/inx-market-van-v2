import Input from "./Input.jsx";

/**
 * @param {string} nameStat1
 */

// Faire une fonction qui liste le nombre de statistiques qui ne sont pas null ou '' et afficher le nombre d'Input en conséquence

export default function Form({ dino, setStat1, setStat2, setStat3, setStat4 }) {
  return (
    <div className="container">
      <Input
        label={dino.nameStat1}
        value={dino.stat1}
        placeholder={dino.nameStat1}
        onChange={setStat1}
      />
      {dino.nameStat2 === "" ? null : (
        <Input
          label={dino.nameStat2}
          value={dino.stat2}
          placeholder={dino.nameStat2}
          onChange={setStat2}
        />
      )}
      {dino.nameStat3 === "" ? null : (
        <Input
          label={dino.nameStat3}
          value={dino.stat3}
          placeholder={dino.nameStat3}
          onChange={setStat3}
        />
      )}
      {dino.nameStat4 === "" ? null : (
        <Input
          label={dino.nameStat4}
          value={dino.stat4}
          placeholder={dino.nameStat4}
          onChange={setStat4}
        />
      )}
    </div>
  );
}
