import { useTranslation } from 'react-i18next';

export default function LngSelector () {
    const lngs = {
        en: { nativeName: 'English' },
        fr: { nativeName: 'Français' }
      };

    const { i18n } = useTranslation()
      
    return (
    <div className='flex'>{Object.keys(lngs).map((lng) => (
    <button className="bg-secondary hover:bg-primary ease-in-out duration-300 h-8 w-8 rounded-full" type="submit" key={lng} onClick={()=>i18n.changeLanguage(lng)}>{lng}</button>
  ))}</div>
  )
}