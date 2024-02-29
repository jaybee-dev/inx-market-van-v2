import { useTranslation } from 'react-i18next';
import FR from '../../assets/images/common/flag-fr.png';
import GB from '../../assets/images/common/flag-gb.png';


export default function LngSelector () {
    const lngs = {
        en: {nativeName: 'English', flag: GB},
        fr: {nativeName: 'Français', flag: FR}
      };

    const { i18n } = useTranslation()
      
    return (
    <div className='flex'>{Object.keys(lngs).map((lng) => (
    <button className="active:opacity-70 h-8 w-8 mx-1.5 uppercase" type="submit" key={lng} onClick={()=>i18n.changeLanguage(lng)}><img src={lngs[lng].flag} alt={lng}/></button>
    ))}</div>
  )
}
