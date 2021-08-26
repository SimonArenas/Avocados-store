import { ShoppingCartIcon } from "@heroicons/react/outline";
import Link from "next/link";
interface Navbar {
  navigation?: Navigation[];
}

interface Navigation {
  name: string;
  href: string;
}

const Navbar = ({ navigation }: Navbar) => {
  return (
    <header className="bg-gray-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2" aria-label="Top">
        <div className="w-full py-4 flex items-center justify-between border-b lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-end">
                {/* <span className="sr-only">Workflow</span> */}
                <img className="h-10 w-auto" src="/images/logo.png" alt="" />
                <span className="text-3xl font-medium text-gray-700 hover:text-gray-900">
                  vocado
                </span>
              </a>
            </Link>
          </div>
          <div className="ml-10 space-x-4">
            <Link href="/login">
              <a className="flex bg-primaryColor py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
                <ShoppingCartIcon
                  className="flex-shrink-0 mr-2 h-6 w-6 text-gray-50 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                My cart (0)
              </a>
            </Link>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation?.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
