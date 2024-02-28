import LngSelector from "./widgets/LngSelector.jsx";
import logo from "../assets/images/common/logo-inx.png"
import Switch from "./forms/Switch.jsx";

/**
 *
 * @returns
 */
export default function Header({handleChange, isDark}) {
    return (
      <div className="grid grid-cols-10 max-md:h-10 justify-between bg-header items-center">
        <div className=" col-start-1 col-span-8">
          <img src={logo} alt="logo"/>
        </div>
        <div className="col-start-10 col-end-11 justify-self-end" >
          <Switch
            isChecked={isDark}
            handleChange={handleChange}
          />
        </div>
        <div className="col-start-11 col-end-12 justify-self-center">
          <LngSelector />
        </div>
      </div>
  );
}