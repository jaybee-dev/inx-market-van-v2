import { Input } from "./Input.jsx";

export function Form ({nameStat1, nameStat2, nameStat3, nameStat4, stat1, stat2, stat3, stat4, setStat1, setStat2, setStat3, setStat4}) {
    <div className='mb-3'>               
    <Input
      id={'stat'+1} 
      label={nameStat1}
      placeholder={nameStat1}
      onChange={(e) => setStat1(e.target.value)}
      value={stat1}
    />
    {nameStat2 === '' ? null : 
    <Input
      id={'stat'+2} 
      label={nameStat2}
      placeholder={nameStat2}
      onChange={(e) => setStat2(e.target.value)}
      value={stat2}
    />}
    {nameStat3 === '' ? null : 
    <Input
      id={'stat'+3} 
      label={nameStat3}
      placeholder={nameStat3}
      onChange={(e) => setStat3(e.target.value)}
      value={stat3}
    />}
    {nameStat4 === '' ? null : 
    <Input
      id={'stat'+4}
      label={nameStat4} 
      placeholder={nameStat4} 
      onChange={(e) => setStat4(e.target.value)}
      value={stat4}
    />}
    </div>
}