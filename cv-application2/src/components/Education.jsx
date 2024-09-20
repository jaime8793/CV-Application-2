function Education({
  degree,
  setDegree,
  schoolName,
  setSchoolName,
  handleChange,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) {
  return (
    <div className="personal-details p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto mb-6">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>

      <div className="flex flex-col mb-4">
        <label className="mb-2 text-lg font-medium">School Name</label>
        <input
          type="text"
          value={schoolName}
          onChange={handleChange(setSchoolName)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="mb-2 text-lg font-medium">Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={handleChange(setStartDate)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="mb-2 text-lg font-medium">End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={handleChange(setEndDate)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="mb-2 text-lg font-medium">Degree</label>
        <input
          type="text"
          value={degree}
          onChange={handleChange(setDegree)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

export default Education;
