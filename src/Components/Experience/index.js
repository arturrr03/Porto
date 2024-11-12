import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Experience = () => {
  const [experience, setExperience] = useState({});
  

  useEffect(() => {
    const db = getDatabase();
    const experienceRef = ref(db, "experience");
    
    onValue(experienceRef, (snapshot) => {
      const data = snapshot.val();
      setExperience(data);
    });
  }, []);
  return (
    <section id="pengalaman" className="cv-section">
      <h2>{experience.title}</h2>
      <div className="cv-job">
        <h3>{experience.subTitle1}
        </h3>
        <p>Barista | Januari 2022 - Agustus 2022</p>
        <p>{experience.subTitle}</p>
      </div>
    </section>
  );
};
export default Experience;
