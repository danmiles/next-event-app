import type { Metadata } from 'next';
// Fonts (here expample two fonts)
import { Inter, Roboto_Flex } from 'next/font/google';
// Global CSS
import './globals.css';
// ======= Components =======
// Navbar
import Navbar from '@/components/navbar/navbar-not-dropdown/Navbar';

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ['latin'],
  variable: '--inter-font',
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'Next.js 14- Event App',
  description: 'Next.js 14- Event App with Clerk authentication and TailwindCSS',
  openGraph: {
    title: 'Next.js 14- Event App',
    description:
      'Next.js 14- Event App with Clerk authentication and TailwindCSS',
    images: [
      {
        url: '/images/og-meta-img.jpg',
        width: 1280,
        height: 720,
      },
    ],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
