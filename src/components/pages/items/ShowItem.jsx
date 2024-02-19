export default function ShowItem(props) {
    return (
      <div className="flex flex-col place-items-center">
        <h2 className="text-xl uppercase">{props.name}</h2>
        <div className="bg-text p-1 rounded-sm">
        <table className="text-center">
          <thead>
            <tr className="bg-accent">
              <th className="p-4">Amount</th>
              <th className="p-4">Details</th>
              <th className="p-4">Price</th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-header">
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