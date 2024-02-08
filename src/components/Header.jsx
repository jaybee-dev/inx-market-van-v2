import ThemeSwitcher from "./widgets/ThemeSwitcher";
import logo from "../assets/images/logo-inx.png"

/**
 *
 * @returns
 */
export default function Header() {
  return (
      <div className="flex justify-between bg-header items-center">
        <img className="max-h-[80%]" src={logo} alt="logo"/>
        <div></div>
        <div className="">
          <ThemeSwitcher />
        </div>
      </div>
  );
}
