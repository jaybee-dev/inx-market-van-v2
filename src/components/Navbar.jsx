import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const liClass = "active:text-secondary uppercase ease-in-out duration-300 text-xl max-sm:text-base w-20 rounded text-center text-text"

/**
 *
 * @returns
 */
export default function Navbar() {
  const { t } = useTranslation();
  return (
    <div>
      <ul className="grid grid-cols-5 p-2 justify-items-center bg-primary">
        <li className={liClass}><Link to="/dinos">{t('nav_dinos')}</Link></li>
        <li className={liClass}><Link to="/items">{t('nav_items')}</Link></li>
        <li className={liClass}><Link to="/saddles">{t('nav_saddles')}</Link></li>
        <li className={liClass}><Link to="/tek">{t('nav_tek')}</Link></li>
        <li className={liClass}><Link to="/bosses">{t('nav_bosses')}</Link></li>
      </ul>
    </div>
  );
}
