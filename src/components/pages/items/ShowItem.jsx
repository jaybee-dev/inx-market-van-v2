import { useTranslation } from "react-i18next";

export default function ShowItem(props) {
  const { t } = useTranslation();
    return (
      <div className="flex flex-col place-items-center">
        <div className="bg-header p-1 rounded-sm shadow-xl dark:shadow-wxl">

          <div className="text-center w-max">

            <div className="font-bold bg-accent h-10 flex flex-row place-items-center">
              <div className="w-24">{t('array_title_amount')}</div>
              <div className="w-fit grow">{t('array_title_details')}</div>
              <div className="w-20">{t('array_title_price')}</div>
            </div>

            <div className="flex flex-row place-items-center">
              <div className="w-24">{props.price.map((x) => {
                          return (
                          <span key={x.id}>{props.amount}<br/></span>
                          )
                        })}
              </div>

              <div className="w-fit">{props.details.map((x)=> {
                      return (
                        <span key={x.id}>{x.detail}<br/></span>
                      )
                      })}
              </div>

              <div className="w-20">{props.price.map((x) => {
                            return (
                            <span key={x.id}>{x.price}<br/></span>
                            )
                          })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }