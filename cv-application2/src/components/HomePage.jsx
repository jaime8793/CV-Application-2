import General from "./General";
import Experience from "./Experience";
import Education from "./Education";
import { useState } from "react";

function HomePage() {
  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };
  const [fullName, setFullName] = useState("Steve Jobs");
  const [email,setEmail] = useState("stevejobs@gmail.com")
  console.log(`Does this work ${fullName}`);
  return (
    <div className="homepage flex h-screen">
      <div className="info-board flex flex-col w-4/12 h-full">
        <General
          fullName={fullName}
          email={email}
          setEmail={setEmail}
          setFullName={setFullName}
          handleChange={handleChange}
        />
        <Experience />
        <Education />
      </div>
      <div className="display-board flex-col h-full w-8/12 ">
        <div className="general-info h-1/5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md">
          General info
          {fullName}
          {email}
        </div>
        <div className="general-info h-4/5">Education Experience</div>
      </div>
    </div>
  );
}
export default HomePage;
