import Link from "next/link";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <div className="pb-6 bg-slate-500">
        <div className="flex flex-row items-center justify-center">
          <Link href="/" className="text-xl text-red-100 ">
            Home
          </Link>
        </div>
      </div>
      <div className="pt-5">{children}</div>
    </div>
  );
};
export default HomeLayout;
