import { DINOS } from "../../datas/dinoList"

export function Select ({activeName, onChange}) {
    
    const names = DINOS.reduce((acc, dino) => 
    acc.includes(dino.name) ? acc : acc.concat(dino.name),[])

    return <select
    className='form-select'
    value={activeName}
    /* add function to reset form on change */
    onChange={onChange}
    >
      <option value=''>Choose dino</option>
      {names.map((cat) => (
        <option key={cat} value={cat}>
          {(cat)}
        </option>
          ))}
  </select>
}