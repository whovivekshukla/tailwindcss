import Link from "next/link";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <div className="pb-6 bg-slate-500">
        <Link
          href="/"
          className="text-xl text-red-100 flex flex-row items-center justify-center"
        >
          Home
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default HomeLayout;
