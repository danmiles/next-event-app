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
            <div className="flex gap-2">
              <Image src="/images/logo.svg" alt="Logo" width={40} height={40} />
              <span className="text-xl font-bold">Next Event</span>
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in">
                <Button>Sign In</Button>
              </Link>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
