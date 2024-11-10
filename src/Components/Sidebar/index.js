const Sidebar = () => {
  return (
    <aside className="cv-sidebar">
      <div className="profile-picture">
        <img src="path/to/your/profile-picture.jpg" alt="Foto Profil" />
      </div>
      <h1>Nama Anda</h1>
      <p>Posisi atau Profesi Anda</p>
      <div className="cv-contact">
        <h2>Kontak</h2>
        <p>Email: anda@email.com</p>
        <p>Telepon: +62 123 456 789</p>
      </div>

      <div className="cv-social">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="path/to/instagram-icon.png" alt="Instagram" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="path/to/facebook-icon.png" alt="Facebook" />
        </a>
      </div>
    </aside>
  );
};
export default Sidebar;
