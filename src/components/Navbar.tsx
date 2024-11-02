import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-slate-400 to-amber-600">
      {/* Inner Content Container */}
      <div className="h-24 flex items-center justify-between max-w-7xl mx-auto px-4">
        {/* LEFT */}
        <div className="md:hidden lg:block w-[20%]">
          <Link href="/" className="font-bold text-xl text-green-400">
            The Spice Rack
          </Link>
        </div>
        {/* Center */}
        <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
          {/* Links */}
          <div className="flex gap-6 text-gray-600">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/home.png"
                alt="Homepage"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>Homepage</span>
            </Link>
            <Link href="" className="flex items-center gap-2">
              <Image
                src="/friends.png"
                alt="Friends"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>Friends</span>
            </Link>
            <Link href="" className="flex items-center gap-2">
              <Image
                src="/stories.png"
                alt="Stories"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>Stories</span>
            </Link>
          </div>
          <div className="hidden xl:flex items-center">
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search..."
                  className="input input-bordered"
                />
                <button className="btn btn-square">
                  <Image
                    src="/search.png"
                    width={14}
                    height={14}
                    alt="search"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
          <SignedIn>
            <div className="cursor-pointer">
              <Image src="/people.png" alt="" width={24} height={24} />
            </div>
            <div className="cursor-pointer">
              <Image src="/messages.png" alt="" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image src="/notifications.png" alt="" width={20} height={20} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <button className="btn btn-accent">Login/Register</button>
            </Link>
          </SignedOut>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
