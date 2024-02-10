import { useTranslation } from 'react-i18next';


/**
 * @param {string} name
 * @param {string} category
 * @param {number} price
 * @param {number} neutedPrice
 */
export default function ShowDinoPrice(props) {
  const {t} = useTranslation()

  return (
    <div className="text-center">
      <h2 className="text-xl uppercase">{props.name}</h2>
      <ul className="list-none">
        <li className="">{props.category}</li>
        <li className="">{t('dinoitem_breedable')} {props.price}</li>
        <li className="">Castré: {props.neutedPrice}</li>
      </ul>
    </div>
  );
}
