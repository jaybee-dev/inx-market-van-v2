import { useTranslation } from "react-i18next";

export default function ShowItem(props) {

    const { t } = useTranslation();
    return (

<div alt="bigContainer" className="flex flex-col items-stretch max-w-screen-md mx-auto border p-2 rounded-sm">

  <div alt="Header" className="flex flex-row p-0 border bg-primary gap-4 text-center">
    <div className="w-1/6 p-2 truncate">{t('array_title_amount')}</div>
    <div className="w-full p-2">{t('array_title_details')}</div>
    <div className="w-1/6 p-2">{t('array_title_price')}</div>
  </div>

  <div alt="Content" className="flex flex-row border bg-secondary gap-4 text-center h-auto">
        <div alt="col1" className="w-1/6 flex flex-col justify-center items-stretch">
          {props.price.map((x) => {
            return (
              <div key={x.id}>{props.amount}</div>
              )})}
        </div>

        <div alt="col2" className="w-full bg-accent">
          {props.details.map((detail) => (
            <div className="flex flex-row justify-center" key={detail.id}>
              {detail.lines ? detail.lines.map((item) => (
                            <div key={item.id} className="flex flex-row justify-center w-full gap-1">
                              <div>{item.n}</div>
                              <div className="line-clamp-3">{t(item.stat)}</div>
                            </div>
                          )) : detail.detail}
                        </div>
                      )
                      )}
        </div>

        <div alt="col3" className="w-1/6 flex flex-col justify-center items-stretch">
          {props.price.map((x) => {
            return (
              <div key={x.id}>{x.price}</div>
              )})}
        </div>

  </div>
</div>

      //         <div className="flex-[4]">
      //           {props.details.map((detail) => (
      //                   <div key={detail.id}>
                          
      //                     {detail.lines ?
      //                     detail.lines.map((item) => (
      //                       <div key={item.id}>
      //                         {item.n}
      //                         {t(item.stat)}
      //                       </div>
      //                     )) : detail.detail}
      //                   </div>
      //                 )
      //                 )}
      //         </div>

      //         <div className="flex-1">{props.price.map((x) => {
      //                       return (
      //                       <span key={x.id}>{x.price}<br/></span>
      //                       )
      //                     })}
      //         </div>
      //       </div>
      //   </div>
      // </div>
    );
  }