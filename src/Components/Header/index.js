import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Header = () => {
  // const [hero, setHero] = useState({});
  

  // useEffect(() => {
  //   const db = getDatabase();
  //   const heroRef = ref(db, "hero");
    
  //   onValue(heroRef, (snapshot) => {
  //     const data = snapshot.val();
  //     setHero(data);
  //   });
  // }, []);
  return (
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
  );
};
export default Header;
