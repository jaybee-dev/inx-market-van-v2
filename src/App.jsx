import { Input } from './components/forms/Input.jsx';
import { DinoItem } from './components/dinos/DinoItem.jsx';
import { Select } from './components/forms/Select.jsx';
import { Form } from './components/forms/Form.jsx';

import { DINOS } from './datas/dinoList.js';

import { useState } from 'react';

function App() {
  const [activeName, setActiveName] = useState('')

  const [stat1, setStat1] = useState('')
  const [stat2, setStat2] = useState('')
  const [stat3, setStat3] = useState('')
  const [stat4, setStat4] = useState('')

  function resetForm() {setStat1(''); setStat2(''); setStat3(''); setStat4('')}

  return <div className='container my-3'>
      <h1 className='h1'>CALCULATEUR PRIX DINOS VANILLA</h1>
      <div className='mb-3'>

      <Select
        activeName={activeName} 
        onChange={(e) => {setActiveName(e.target.value);
        resetForm() }}
      />
                {DINOS.map(({ id, name, category, price, neutedPrice, nameStat1, nameStat2, nameStat3, nameStat4 }) => 
                    activeName === name ? (
                    
                    <div key={id}>
                        <Form
                          nameStat1={nameStat1}nameStat2={nameStat2}nameStat3={nameStat3}nameStat4={nameStat4}
                          stat1={stat1}stat2={stat2}stat3={stat3}stat4={stat4}
                          onChange={(e) => setStat1(e.target.value)}
                          onChange2={(e) => setStat2(e.target.value)}

                        />
                        <div>
                        <DinoItem 
                          name={name}
                          category={category}
                          price={Math.round( ( (price*(Math.round(stat1)/80)) + (price*(Math.round(stat2)/80)*0.7) + (price*(Math.round(stat3)/80)*0.4) + (price*(Math.round(stat4)/80)*0.3) )/100 )*100}
                          neutedPrice={Math.round( ( (neutedPrice*(Math.round(stat1)/80)) + (neutedPrice*(Math.round(stat2)/80)*0.7) + (neutedPrice*(Math.round(stat3)/80)*0.4) + (neutedPrice*(Math.round(stat4)/80)*0.3) )/100 )*100}
                        />
                        </div>
                    </div>
                ) : null 
                )}
        </div>
    </div>
}

export default App