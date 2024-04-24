import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const liClass = "active:text-secondary uppercase ease-in-out duration-300 text-xl max-sm:text-base w-20 text-center text-text"

/**
 *
 * @returns
 */
export default function Navbar() {
  const { t } = useTranslation();
  return (
    <div>
      <ul className="grid grid-cols-5 p-2 justify-items-center bg-primary">
        <li className={liClass}>
          <NavLink to="/dinos" className={({ isActive }) => isActive ? 'underline' : ''}>{t('nav_dinos')}</NavLink>
        </li>
        <li className={liClass}>
          <NavLink to="/items" className={({ isActive }) => isActive ? 'underline' : ''}>{t('nav_items')}
          </NavLink>
        </li>
        <li className={liClass}>
          <NavLink to="/saddles" className={({ isActive }) => isActive ? 'underline' : ''}>{t('nav_saddles')}
          </NavLink>
        </li>
        <li className={liClass}>
          <NavLink to="/tek" className={({ isActive }) => isActive ? 'underline' : ''}>{t('nav_tek')}
          </NavLink>
        </li>
        <li className={liClass}>
          <NavLink to="/bosses" className={({ isActive }) => isActive ? 'underline' : ''}>{t('nav_bosses')}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
