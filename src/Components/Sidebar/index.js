const Sidebar = () => {
  return (
    <aside className="cv-sidebar">
      <div className="profile-picture">
        <img src="images/profile.jpg" alt="Foto Profil" />
      </div>
      <h1>Arturito Rawung</h1>
      <p>Mahasiswa Universitas Klabat</p>
      <div className="cv-contact">
        <h2>Kontak</h2>
        <p>Email: Rawungito@gmail.com</p>
        <p>Telepon: +62 896 3100 8966</p>
      </div>

      <div className="cv-social">
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
        <a
          href="https://www.instagram.com/arturitoimanuel/?igsh=MXAxMTIxdXdta3VncA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="images/git.png" alt="Git Hub" />
        </a>
      </div>
    </aside>
  );
};
export default Sidebar;
