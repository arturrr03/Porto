import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Education = () => {
  const [education, setEducation] = useState([]);
  

  useEffect(() => {
    const db = getDatabase();
    const educationRef = ref(db, "education/");
    
    onValue(educationRef, (snapshot) => {
      const data = snapshot.val();
      setEducation(data);
    });
  }, []);
  return (
    <section id="pendidikan" className="cv-section">
      <h2>{education.title}</h2>
      <div className="cv-education">
        <h3>SD Advent Langowan</h3>
        <p> SD | 2009-2015</p>
        <h3>SMP Negeri 1 Langowan</h3>
        <p>SMP | 2015-2018</p>
        <h3>SMK Negeri 1 Langowan</h3>
        <p>SMK | 2018-2021</p>
        <h3>Universitas Klabat</h3>
        <p>Informatika | 2022-2025</p>
      </div>
    </section>
  );
};
export default Education;
