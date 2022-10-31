import { useRouter } from 'next/router';
import Link from 'next/link';
const Navbar = () => {
  const router = useRouter();
  return (
    <header className="w-full bg-white border-b-2 border-gray-200 py-5 px-8 shadow-sm">
      <nav className="container flex justify-between items-center w-full sm:flex-row">
        <Link href="/" className="text-xl font-semibold tracking-wide">
          Car Leasing
        </Link>
        <div className="nav-links">
          <Link href="/" className={router.pathname == '/' ? 'active' : null}>
            Home
          </Link>
          <Link
            href="/about"
            className={router.pathname == '/about' ? 'active' : null}
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
