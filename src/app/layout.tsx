import type { Metadata } from 'next';
// Clerk authentication
import { ClerkProvider } from '@clerk/nextjs';
// Font
import { Inter } from 'next/font/google';
// Global CSS
import './globals.css';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--inter-font',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Next.js 14- Event App',
  description:
    'Next.js 14- Event App with Clerk authentication and TailwindCSS',
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
    <ClerkProvider>
      <html lang="en">
        <body className={inter.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
