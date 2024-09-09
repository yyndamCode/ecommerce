import Link from "next/link";

function Navigation({ isOpen }) {
  return (
    <nav className={`mt-10 ${isOpen ? "block" : "hidden"} md:block  md:mt-0 `}>
      <ul className=" md:flex md:gap-3 laptop:gap-6 desktop:gap-12 ">
        <li className="my-4 md:my-0 rounded-lg p-1 hover:bg-primary-7 hover:text-primary-20 md:hover:bg-transparent md:rounded-0 md:p-0 ">
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <li className="my-4 md:my-0 rounded-lg p-1 hover:bg-primary-7 hover:text-primary-20 md:hover:bg-transparent md:rounded-0 md:p-0">
          <Link href="/contact">
            <p>Contact</p>
          </Link>
        </li>
        <li className="my-4 md:my-0 rounded-lg p-1 hover:bg-primary-7 hover:text-primary-20 md:hover:bg-transparent md:rounded-0 md:p-0">
          <Link href="/about">
            <p>About</p>
          </Link>
        </li>
        <li className="my-4 md:my-0 rounded-lg p-1 hover:bg-primary-7 hover:text-primary-20 md:hover:bg-transparent md:rounded-0 md:p-0">
          <Link href="/users">
            <p>Sign Up</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
