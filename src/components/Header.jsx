import ThemeSwitcher from "./widgets/ThemeSwitcher";
import logo from "../assets/images/logo-inx.png"

/**
 *
 * @returns
 */
export default function Header() {
  return (
      <div className="h-20 flex justify-between bg-zinc-100 text-zinc-800 px-2">
        <img className="h-12 max-sm:h-6 place-self-center" src={logo} alt="logo"/>
        <div className="flex-none place-self-center">
          <ThemeSwitcher />
        </div>
      </div>
  );
}
