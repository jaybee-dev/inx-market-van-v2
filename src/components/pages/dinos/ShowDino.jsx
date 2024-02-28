import { useTranslation } from 'react-i18next';

/**
 * @param {string} name
 * @param {string} category
 * @param {number} price
 * @param {number} neutedPrice
 */
export default function ShowDino(props) {
  const { t } = useTranslation();

  return (
    <div className="text-center">
        <ul className="list-none">
          <li className="">{t('dinoitem_breedable')}: {props.price}</li>
          <li className="">{t('dinoitem_neuted')}: {props.neutedPrice}</li>
        </ul> 
      
    </div>
  );
}
