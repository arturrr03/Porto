import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Profile = () => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const profileRef = ref(db, "profile");
    
    onValue(profileRef, (snapshot) => {
      const data = snapshot.val();
      setProfile(data);
    });
  }, []);
  return (
    
    <section id="profil" className="cv-section">
      <h2>{profile.title}</h2>
      <p>{profile.subTitle}</p>
    </section>
  );
};
export default Profile;
