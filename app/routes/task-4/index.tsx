import { useState } from 'react';

function Page() {
  const [value, setValue] = useState<string>('');

  return (
    <div className="container mx-auto p-4 flex flex-col h-screen gap-2.5 items-center justify-center">
      <h1 className="text-2xl">Type a word in the box</h1>
      <input
        className="w-40 bg-white text-black px-2 py-1 rounded-md"
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <div>Your word is "{value}"</div>
    </div>
  );
}

export default Page;
