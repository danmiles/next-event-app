import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import NavItems from './NavItems';
import NavMobile from './NavMobile';

const Header = () => {
  return (
    <header className="border-b bg-purple-700">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image src="/images/logo.svg" alt="Logo" width={40} height={42} />
              <span className="lg:text-3xl text-2xl text-white font-bold">Next Event</span>
            </div>
          </Link>
          {/* Navbar */}
          <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
          {/* Buttons and Navbar mobile */}
          <div className="flex items-center gap-2">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
              <NavMobile />
            </SignedIn>
            <SignedOut>
              <Button asChild className="rounded-full" size="lg">
                <Link href="/sign-in">Login</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
