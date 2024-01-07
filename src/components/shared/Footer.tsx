import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t bg-slate-300">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image src="/images/logo.svg" alt="logo" width={60} height={60} />
        </Link>

        <p className='font-bold'>
          2023 Next 14 Event App -{' '}
          <a
            href="https://web-navigator.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Denis Rusanov
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
