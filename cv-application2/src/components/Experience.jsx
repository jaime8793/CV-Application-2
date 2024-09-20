function Experience({
  jobTitle,
  setJobTitle,
  company,
  setCompany,
  expStartDate,
  setExpStartDate,
  expEndDate,
  setExpEndDate,
  handleChange,
}) {
  return (
    <div className="experience-details p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto mb-6">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>

      <div className="flex flex-col mb-4">
        <label className="mb-2 text-lg font-medium">Job Title</label>
        <input
          type="text"
          value={jobTitle}
          onChange={handleChange(setJobTitle)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="mb-2 text-lg font-medium">Company</label>
        <input
          type="text"
          value={company}
          onChange={handleChange(setCompany)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="mb-2 text-lg font-medium">Start Date</label>
        <input
          type="date"
          value={expStartDate}
          onChange={handleChange(setExpStartDate)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="mb-2 text-lg font-medium">End Date</label>
        <input
          type="date"
          value={expEndDate}
          onChange={handleChange(setExpEndDate)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

export default Experience;
