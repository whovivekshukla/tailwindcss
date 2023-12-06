const Typography = () => {
  return (
    <div>
      <div className="pb-4">
        <h1 className="text-6xl ">Typography</h1>
      </div>
      <div>
        <h1 className="text-6xl underline decoration-red-500 decoration-wavy decoration-1 underline-offset-8">
          Title 1
        </h1>
        <h2 className="text-2xl">Title 2</h2>
        <h3 className="text-xl">Title 3</h3>
        <p className="text-sm">A regular paragraph</p>
        <p className="text-sm">A descriptive paragraph</p>
        <p className="text-xs note">A little note</p>
        <p className="break-words">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          modi reprehenderit! Repudiandaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaajsgsdhghgfhgkdjhfgkdjlhgdjh eos, necessitatibus quae, maxime
          fugiat reprehenderit odit molestiae magni est, beatae debitis quo!
        </p>
      </div>
    </div>
  );
};
export default Typography;
