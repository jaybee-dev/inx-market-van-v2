import ThemeSwitcher from "./widgets/ThemeSwitcher";

/**
 *
 * @returns
 */
export default function Header() {
  return (
    <div className="container-fluid bg-body">
      <div className="row">
        <h1 className="display-1 text-dark">HEADER</h1>
        <div className="position-relative">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
