import HamburgerMenu from "./HamburgerMenu.jsx";
import TracksyLogo from "../assets/tracksy-logo.png";

export default function Header() {
  return (
    <header>
      <img className="tracksy-logo" src={TracksyLogo} alt="Tracksy Logo" />
      <HamburgerMenu />
    </header>
  );
}
