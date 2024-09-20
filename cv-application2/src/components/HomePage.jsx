import React, { useState } from "react";

function HomePage() {
  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const [fullName, setFullName] = useState("Steve Jobs");
  const [email, setEmail] = useState("stevejobs@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("+1-800-apple-800");
  const [address, setAddress] = useState("Cupertino California");

  const [degree, setDegree] = useState("Economics");
  const [startDate, setStartDate] = useState("06/10/1963");
  const [endDate, setEndDate] = useState("06/09/1997");
  const [schoolName, setSchoolName] = useState("University of Nairobi");

  const [jobTitle, setJobTitle] = useState("Software Engineer");
  const [company, setCompany] = useState("Apple Inc.");
  const [expStartDate, setExpStartDate] = useState("01/01/1980");
  const [expEndDate, setExpEndDate] = useState("01/01/1997");

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/3 p-6 overflow-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Personal Details
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="fullName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={fullName}
                onChange={handleChange(setFullName)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={email}
                onChange={handleChange(setEmail)}
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="tel"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={phoneNumber}
                onChange={handleChange(setPhoneNumber)}
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                id="address"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={address}
                onChange={handleChange(setAddress)}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="schoolName"
                className="block text-sm font-medium text-gray-700"
              >
                School Name
              </label>
              <input
                id="schoolName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={schoolName}
                onChange={handleChange(setSchoolName)}
              />
            </div>
            <div>
              <label
                htmlFor="degree"
                className="block text-sm font-medium text-gray-700"
              >
                Degree
              </label>
              <input
                id="degree"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={degree}
                onChange={handleChange(setDegree)}
              />
            </div>
            <div>
              <label
                htmlFor="eduStartDate"
                className="block text-sm font-medium text-gray-700"
              >
                Start Date
              </label>
              <input
                id="eduStartDate"
                type="date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={startDate}
                onChange={handleChange(setStartDate)}
              />
            </div>
            <div>
              <label
                htmlFor="eduEndDate"
                className="block text-sm font-medium text-gray-700"
              >
                End Date
              </label>
              <input
                id="eduEndDate"
                type="date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={endDate}
                onChange={handleChange(setEndDate)}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Experience
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="jobTitle"
                className="block text-sm font-medium text-gray-700"
              >
                Job Title
              </label>
              <input
                id="jobTitle"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={jobTitle}
                onChange={handleChange(setJobTitle)}
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Company
              </label>
              <input
                id="company"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={company}
                onChange={handleChange(setCompany)}
              />
            </div>
            <div>
              <label
                htmlFor="expStartDate"
                className="block text-sm font-medium text-gray-700"
              >
                Start Date
              </label>
              <input
                id="expStartDate"
                type="date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={expStartDate}
                onChange={handleChange(setExpStartDate)}
              />
            </div>
            <div>
              <label
                htmlFor="expEndDate"
                className="block text-sm font-medium text-gray-700"
              >
                End Date
              </label>
              <input
                id="expEndDate"
                type="date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={expEndDate}
                onChange={handleChange(setExpEndDate)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-2/3 p-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-6">Resume Preview</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">General Info</h3>
              <p className="text-lg">Name: {fullName}</p>
              <p className="text-lg">Email: {email}</p>
              <p className="text-lg">Phone: {phoneNumber}</p>
              <p className="text-lg">Address: {address}</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Education</h3>
              <p className="text-lg">School: {schoolName}</p>
              <p className="text-lg">Degree: {degree}</p>
              <p className="text-lg">
                Duration: {startDate} - {endDate}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Experience</h3>
              <p className="text-lg">Job Title: {jobTitle}</p>
              <p className="text-lg">Company: {company}</p>
              <p className="text-lg">
                Duration: {expStartDate} - {expEndDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
