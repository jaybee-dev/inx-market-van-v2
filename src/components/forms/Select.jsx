import { DINOS } from "../../datas/dinoList"

/**
 * 
 * @param {string} activeName
 * @param {} onChange 
 * @returns 
 */
export function Select ({activeName, onChange}) {
    
    const names = DINOS.reduce((acc, dino) => 
    acc.includes(dino.name) ? acc : acc.concat(dino.name),[])
    
    return <select
    className='form-select'
    value={activeName}
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