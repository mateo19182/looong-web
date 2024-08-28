import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Looong Life
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-blue-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-blue-200">
              About
            </Link>
          </li>
          <li>
            <Link href="#features" className="hover:text-blue-200">
              Features
            </Link>
          </li>
          <li>
            <Link href="#signup" className="hover:text-blue-200">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;