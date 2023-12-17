import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Header />
        <body>{children}</body>
        <Footer />
      </html>
    </ClerkProvider>
  );
}
