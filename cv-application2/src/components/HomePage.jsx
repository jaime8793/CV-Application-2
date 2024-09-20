import General from "./General";
import Experience from "./Experience";
import Education from "./Education";
import { useState } from "react";

function HomePage() {
  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const [fullName, setFullName] = useState("Steve Jobs");
  const [email, setEmail] = useState("stevejobs@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("+1-800-apple-800");
  const [address, setAddress] = useState("Cupertino Carlifornia");
  const [degree, setDegree] = useState("Economics");
  const [startDate, setStartDate] = useState("06/10/1963");
  const [endDate, setEndDate] = useState("06/09/1997");
  const [schoolName, setSchoolName] = useState("University of Nairobi");

  return (
    <div className="homepage flex h-screen bg-gray-50">
      <div className="info-board flex flex-col w-4/12 h-full p-4 bg-white shadow-md rounded-lg">
        <General
          {...{
            phoneNumber,
            setPhoneNumber,
            fullName,
            email,
            setEmail,
            setFullName,
            handleChange,
            address,
            setAddress,
          }}
        />
        <Experience /> {/* Add Experience Component */}
        <Education
          {...{
            schoolName,
            startDate,
            endDate,
            degree,
            setDegree,
            setEndDate,
            setStartDate,
            setSchoolName,
            handleChange,
          }}
        />
      </div>

      {/* Display section styled with gradient background */}
      <div className="display-board flex flex-col h-full w-8/12 p-6 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg shadow-md text-white">
        <div className="general-info h-1/5 bg-white bg-opacity-20 p-4 rounded-md shadow-lg">
          <h3 className="text-xl font-semibold">General Info</h3>
          <p className="text-lg mt-2">Name: {fullName}</p>
          <p className="text-lg">Email: {email}</p>
        </div>
        <div className="education-experience h-4/5 mt-4 bg-white bg-opacity-20 p-4 rounded-md shadow-lg">
          <h3 className="text-xl font-semibold">Education & Experience</h3>
          {/* You can add details about education and experience here */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
