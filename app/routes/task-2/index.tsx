function Page() {
  return (
    <div className="h-screen flex flex-col gap-4 bg-slate-300 container mx-auto p-4">
      <div className="flex gap-4">
        <div className="bg-teal-700 w-24 aspect-square"></div>
        <div className="bg-teal-700 w-24"></div>
        <div className="bg-teal-700 w-full"></div>
        <div className="bg-teal-700 w-24"></div>
        <div className="bg-teal-700 w-24"></div>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-y-16 py-4 bg-teal-700 px-4">
        <div className="bg-lime-500 ml-auto w-1/5 h-12"></div>
        <div className="bg-lime-500 w-1/5 h-12"></div>
        <div className="bg-lime-500 w-full h-12"></div>
        <div className="bg-lime-500 w-1/5 h-12"></div>
        <div className="bg-lime-500 ml-auto w-1/5 h-12"></div>
      </div>
    </div>
  );
}

export default Page;
