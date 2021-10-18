import './NavBar.css';
import Busca from './Busca';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header id="cabecalho">
      <div className="menu">
        <Link to="/home">
          <div className="logo" />
        </Link>
        <nav id="nav-bar">
          <Link to="/solutions">
            <div className="link">
              <p>Nossas soluções </p>
            </div>
          </Link>
          <Link to="/jussi">
            <div className="link">
              <p> Conheça a Jüssi</p>
            </div>
          </Link>
        </nav>
      </div>
      <Busca />
    </header>
  );
};
export default NavBar;
