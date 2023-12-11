const Spacing = () => {
  return (
    <div>
      <h1 className="font-bold text-white bg-red-500 m-4 ">Hello</h1>
      <div className="m-4 font-bold text-white bg-blue-500">
        box with margin
      </div>
      <div className="p-4 font-bold text-white bg-red-500">
        box with padding
      </div>
      <div className="my-4">
        <h1 className="font-bold text-2xl my-4">This is my title</h1>
        <p>This is my paragraph</p>
      </div>
      <div>
        <div className="h-16 w-36 bg-sky-400"></div>
        <div className="-mt-8 bg-red-500">-mt-8</div>
      </div>
    </div>
  );
};
export default Spacing;
