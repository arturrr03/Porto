import {Fade} from "react-awesome-reveal";
const Header = () => {
  
  return (
    <Fade>
      <header className="cv-header">
      <nav className="cv-nav">
        <ul>
          <li>
            <a href="#profil">Profil</a>
          </li>
          <li>
            <a href="#pengalaman">Pengalaman Kerja</a>
          </li>
          <li>
            <a href="#pendidikan">Pendidikan</a>
          </li>
          <li>
            <a href="#keahlian">Keahlian</a>
          </li>
          <li>
            <a href="#kontak">Kontak</a>
          </li>
        </ul>
      </nav>
    </header>
  
    </Fade>
    );
};
export default Header;
