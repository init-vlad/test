import React, { useState } from 'react';

function Page() {
  const [lowerLimit, setLowerLimit] = useState('');
  const [upperLimit, setUpperLimit] = useState('');
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const handleGenerate = () => {
    const lower = parseInt(lowerLimit);
    const upper = parseInt(upperLimit);

    if (!isNaN(lower) && !isNaN(upper) && lower < upper) {
      const number = Math.floor(Math.random() * (upper - lower + 1)) + lower;
      setRandomNumber(number);
    } else {
      alert('Please enter valid numeric limits where lower < upper.');
    }
  };

  const handleClear = () => {
    setLowerLimit('');
    setUpperLimit('');
    setRandomNumber(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-black">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-lg font-bold mb-4">Your random number is:</h1>
        <div className="text-2xl font-semibold text-gray-700 mb-4">
          {randomNumber !== null ? randomNumber : '?'}
        </div>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleGenerate();
          }}
        >
          <div>
            <label className="block text-sm font-semibold mb-1">
              Lower limit
            </label>
            <input
              type="number"
              value={lowerLimit}
              onChange={(e) => setLowerLimit(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none bg-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Upper limit
            </label>
            <input
              type="number"
              value={upperLimit}
              onChange={(e) => setUpperLimit(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none bg-transparent"
            />
          </div>
          <div className="flex space-x-2 gap-4">
            <button
              type="button"
              onClick={handleGenerate}
              className="flex-1 px-4 py-2 bg-red-500 border rounded-md hover:bg-red-600"
            >
              Generate
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="flex-1 px-4 py-2 bg-gray-300 text-gray-600 rounded-md hover:bg-gray-400"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
