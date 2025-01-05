function Page() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url('/imgs/img.webp')`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center min-h-screen bg-orange-400/30">
          <div className="bg-transparent text-white w-full max-w-lg p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Application</h1>
            <p className="text-sm mb-6">
              Note: This form is to be submitted 30 days before the starting
              date
            </p>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Personal Info</h2>
              <label className="flex gap-2 items-center">
                <div className="w-24">Name</div>
                <input
                  type="text"
                  placeholder="Enter your name..."
                  className="w-full p-2 border rounded bg-gray-100 text-gray-800"
                />
              </label>
              <label className="flex gap-2 items-center">
                <div className="w-24">Address</div>
                <input
                  type="text"
                  placeholder="Enter your address..."
                  className="w-full p-2 border rounded bg-gray-100 text-gray-800"
                />
              </label>
              <label className="flex gap-2 items-center">
                <div className="w-24">Email</div>
                <input
                  type="email"
                  placeholder="Enter your e-mail..."
                  className="w-full p-2 border rounded bg-gray-100 text-gray-800"
                />
              </label>
              <label className="flex gap-2 items-center">
                <div className="w-24">Grade</div>
                <input
                  type="text"
                  placeholder="Grade"
                  className="w-full p-2 border rounded bg-gray-100 text-gray-800"
                />
              </label>
              <label className="flex gap-2 items-center">
                <div className="w-24">Phone</div>
                <input
                  type="text"
                  placeholder="+7"
                  className="w-full p-2 border rounded bg-gray-100 text-gray-800"
                />
              </label>
            </div>
            <div className="mt-6">
              <h2 className="text-lg font-semibold">Gender</h2>
              <div className="flex items-center gap-4 mt-2">
                <label className="flex items-center">
                  <input type="radio" name="gender" className="mr-2" /> Male
                </label>
                <label className="flex items-center">
                  <input type="radio" name="gender" className="mr-2" /> Female
                </label>
                <label className="flex items-center">
                  <input type="radio" name="gender" className="mr-2" /> Other
                </label>
              </div>
              <input
                type="date"
                className="mt-4 w-full p-2 border rounded bg-gray-100 text-gray-800"
              />
            </div>
            <div className="mt-6">
              <h2 className="text-lg font-semibold">Check all the apply</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
