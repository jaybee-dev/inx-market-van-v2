import { Input } from "./Input.jsx";

/**
 * 
 * @param {string} nameStat1 
 * @returns 
 */
export function Form ({nameStat1, nameStat2, nameStat3, nameStat4, stat1, stat2, stat3, stat4, onChange, onChange2}) {
    return <div className='mb-3'>               
    <Input
      id={'stat'+1} 
      label={nameStat1}
      placeholder={nameStat1}
      onChange={onChange}
      defaultValue={stat1}
    />
    {nameStat2 === '' ? null : 
    <Input
      id={'stat'+2} 
      label={nameStat2}
      placeholder={nameStat2}
      onChange={onChange2}
      defaultValue={stat2}
    />}
    {nameStat3 === '' ? null : 
    <Input
      id={'stat'+3} 
      label={nameStat3}
      placeholder={nameStat3}
      onChange={onChange}
      value={stat3}
    />}
    {nameStat4 === '' ? null : 
    <Input
      id={'stat'+4}
      label={nameStat4} 
      placeholder={nameStat4} 
      onChange={onChange}
      value={stat4}
    />}
    </div>
}