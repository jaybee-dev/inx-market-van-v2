import { useTranslation } from "react-i18next";

export default function ShowItem(props) {
  const { t } = useTranslation();
    return (
      <div className="flex flex-col place-items-center">
        <div className="bg-header p-1 rounded-sm shadow-xl dark:shadow-wxl">
        <table className="text-center min-w-72">
          <thead>
            <tr className="bg-accent">
              <th className="p-4">{t('array_title_amount')}</th>
              <th className="p-4">{t('array_title_details')}</th>
              <th className="p-4">{t('array_title_price')}</th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-header dark:text-background">
              <td>{props.amount}</td>
              <td>{props.details.map((x)=> {
                return (
                  <span key={x.id}>{x.detail}<br/></span>
                )
                })}</td>
                  <td>
                  {props.price.map((x) => {
                    return (
                    <span key={x.id}>{x.price}<br/></span>
                    )
                  })}
                  </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
  }