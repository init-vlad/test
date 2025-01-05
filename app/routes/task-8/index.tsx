import { SyntheticEvent, useState } from 'react';

function Page() {
  const [message, setMessage] = useState('');
  const [lastMessage, setLastMessage] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setLastMessage(message);
      setMessage(''); // Очистить поле ввода
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-orange-500 text-black">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-lg font-bold mb-4">
          A message you would like to pass
        </h1>
        <form className="flex items-center mb-4 gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            className="flex-1 px-3 py-2 border w-full border-gray-300 rounded-md outline-none bg-transparent"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-orange-500 rounded-md hover:bg-orange-600 border"
          >
            Submit
          </button>
        </form>
        <div>
          <h2 className="text-sm font-semibold">Last message delivered:</h2>
          <p className="text-gray-700 mt-1">{lastMessage || 'None'}</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
