import HamburgerMenu from "./HamburgerMenu.jsx";
import TracksyLogo from "../assets/tracksy-logo.png";

export default function Header() {
  return (
    <header>
      <a href="/" className="logo-link">
        <img className="tracksy-logo" src={TracksyLogo} alt="Tracksy Logo" />
      </a>
      <HamburgerMenu />
    </header>
  );
}
