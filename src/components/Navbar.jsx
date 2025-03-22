import { useEffect, useRef, useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  //Close menu on click outside
  useEffect(() => {
    const handler = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO  */}

      <Link to="/" className="flex items-center gap-3 text-2xl font-bold ">
        <Image
          src="https://ik.imagekit.io/devabhi/logo.png"
          alt={"logo"}
          width={32}
          height={32}
        />
        <span>Beyond Ink.</span>
      </Link>

      {/* MOBILE MENU */}

      <div className="md:hidden">
        <div
          className="cursor-pointer text-2xl "
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☰"}
        </div>

        {/* Mobile Links  */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 bg-[#D1E8E2] transition-all duration-300 ease-in-out ${
            open ? "-right-0" : "-right-full"
          }`}
        >
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/" onClick={() => setOpen(false)}>
            Trending
          </Link>
          <Link to="/" onClick={() => setOpen(false)}>
            Most Popular
          </Link>
          <Link to="/" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/login" onClick={() => setOpen(false)}>
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Log in👋🏻
            </button>
          </Link>
        </div>
      </div>

      {/* DESKTOP MENU  */}

      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>

        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Log in👋🏻
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};
export default Navbar;
