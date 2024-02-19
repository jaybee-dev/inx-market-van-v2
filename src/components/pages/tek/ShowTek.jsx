export default function ShowTek(props) {
  return (
      <div className="flex flex-col place-items-center">
        <h2 className="text-xl uppercase">{props.name}</h2>
        <div className="bg-header p-1 rounded-sm">
          <table className="text-center">
            <thead>
              <tr className="bg-accent">
                {props.amount === null ? null : <th className="p-4">Amount</th>}
                {props.details === null ? null : <th className="p-4">Details</th>}
                <th className="p-4">Price</th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-header">
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

