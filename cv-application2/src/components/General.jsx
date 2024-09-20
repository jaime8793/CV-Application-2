function General({
  fullName,
  setFullName,
  handleChange,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  address,
  setAddress,
}) {
  return (
    <div className="personal-details p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto mb-6">
      <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>

      <div className="flex flex-col mb-4">
        <label className="mb-2 text-lg font-medium">Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={handleChange(setFullName)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="mb-2 text-lg font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleChange(setEmail)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="mb-2 text-lg font-medium">Phone Number</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={handleChange(setPhoneNumber)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="mb-2 text-lg font-medium">Address</label>
        <input
          type="text"
          value={address}
          onChange={handleChange(setAddress)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

export default General;
