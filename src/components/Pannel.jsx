/**
 *
 * @returns
 */
export default function Pannel(props) {
  return (
    <div>
      <h2 className="uppercase text-center text-xl">{props.title}</h2>
      <p className="text-center">{props.infos}</p>
    </div>
  );
}
