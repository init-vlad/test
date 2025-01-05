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

            <div className="mt-6">
              <h2 className="text-lg font-semibold">Check all the apply</h2>
              <div className="flex flex-col gap-2">
                <label>
                  <input type="checkbox" className="mr-2" /> I want to learn
                  JavaScript
                </label>
                <label>
                  <input type="checkbox" className="mr-2" /> I want to learn
                  React
                </label>
                <label>
                  <input type="checkbox" className="mr-2" /> I want to learn
                  HTML
                </label>
                <label>
                  <input type="checkbox" className="mr-2" /> I want to learn CSS
                </label>
                <label>
                  <input type="checkbox" className="mr-2" /> I want to learn
                  Python
                </label>
                <label>
                  <input type="checkbox" className="mr-2" /> I want to learn C#
                </label>
              </div>
            </div>
            <div className="mt-6">
              <label className="block">
                <span className="text-lg font-semibold">Education Level</span>
                <select
                  className="w-full p-2 mt-2 border rounded bg-gray-100 text-gray-800"
                  defaultValue="Bachelor"
                >
                  <option value="HighSchool">High School</option>
                  <option value="Associate">Associate</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Master">Master</option>
                  <option value="Doctorate">Doctorate</option>
                </select>
              </label>
            </div>
            <div className="mt-6">
              <h2 className="text-lg font-semibold">Essay Section</h2>
              <textarea
                placeholder="Your essay here..."
                className="w-full p-2 border rounded bg-gray-100 text-gray-800 h-32"
              ></textarea>
            </div>
            <div className="mt-6 flex justify-between">
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Submit
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
