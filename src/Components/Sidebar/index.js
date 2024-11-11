import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Sidebar = () => {
  const [sidebar, setSidebar] = useState({});
  

  useEffect(() => {
    const db = getDatabase();
    const sidebarRef = ref(db, "sidebar");
    
    onValue(sidebarRef, (snapshot) => {
      const data = snapshot.val();
      setSidebar(data);
    });
  }, []);
  return (
    <aside className="cv-sidebar">
      <div className="profile-picture">
        <img src={`data:image/jpeg;base64, ${sidebar.image}`} alt="Foto Profil" />
      </div>
      <h1>{sidebar.title}</h1>
      <p>Mahasiswa Universitas Klabat</p>
      <div className="cv-contact">
        <h2>Kontak</h2>
        <p>Email : Rawungito@gmail.com</p>
        <p>Telepon : +62 896 3100 8966</p>
      </div>

      <div className="cv-social">
        <div className="social-row">
          <a
            href="https://www.instagram.com/arturitoimanuel/?igsh=MXAxMTIxdXdta3VncA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/ig.png" alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/vhira.rharawung?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/facebook.png" alt="Facebook" />
          </a>
        </div>
        <div className="social-row">
          <a
            href="https://github.com/arturrr03"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/git.png" alt="Git Hub" />
          </a>
          <a
            href="https://www.linkedin.com/in/arturito-imanuel-b4672b2b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/in.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
