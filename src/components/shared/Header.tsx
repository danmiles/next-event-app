import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image src="/images/logo.svg" alt="Logo" width={40} height={42} />
              <span className="text-2xl font-bold">Next Event</span>
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            <Button asChild className="rounded-full" size="lg">
              Sign In
            </Button>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
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
