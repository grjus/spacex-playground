import { SpaceXLogo } from '../icons';

export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost">
          <img className="h-[32px]" src={SpaceXLogo} />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/capsules">Capsules</a>
          </li>
          <li>
            <a href="/launches">Launches</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
