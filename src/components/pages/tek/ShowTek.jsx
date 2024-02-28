import { useTranslation } from "react-i18next";

export default function ShowTek(props) {
  const { t } = useTranslation();
  return (
      <div className="flex flex-col place-items-center">
        {/* <h2 className="text-xl uppercase">{props.name}</h2> */}
        <div className="bg-header p-0.5 rounded-sm shadow-xl dark:shadow-wxl">
          <table className="text-center min-w-72">
            <thead>
              <tr className="bg-accent">
                {props.amount === null ? null : <th className="p-4">{t('array_title_amount')}</th>}
                {props.details === null ? null : <th className="p-4">{t('array_title_details')}</th>}
                <th className="p-4">{t('array_title_price')}</th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-header dark:text-background">
                {props.amount === null ? null : <td>{props.amount}</td>}
                {props.details === null ? null : 
                  <td>
                  {props.details.map((x) => {
                    return (
                      <span key={x.id}>{x.detail}<br/></span>
                      )
                  })}
                  </td>}

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

