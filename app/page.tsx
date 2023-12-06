import Link from "next/link";

const links = [
  { href: "/01-colors", text: "Colors" },
  { href: "/02-customizations", text: "Customizations" },
  { href: "/03-typography", text: "Typography" },
];

export default function Home() {
  return (
    <div>
      <div className="flex flex-row justify-center py-2">
        <h1 className="text-6xl ">TailwindCSS</h1>
      </div>
      <div className="flex flex-col items-center justify-center w-screen mt-8">
        {links.map((link) => (
          <Link href={link.href}>
            <p className="text-blue-500">{link.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
